/*
  All progress lives in one localStorage key, as an array of stable task ids.
  Ids are hand-written in src/data — never positional — so the roadmap can be
  reordered or reworded without disturbing anything already ticked off.
*/
(function () {
  "use strict";

  var KEY = "ios-roadmap.v1";
  var VERSION = 1;

  var gate = [];
  var gateEl = document.querySelector("[data-gate]");
  var gateData = document.getElementById("gate-data");
  if (gateData) {
    try { gate = JSON.parse(gateData.textContent || "[]"); } catch (e) { gate = []; }
  }

  var inputs = Array.prototype.slice.call(document.querySelectorAll("input[data-task]"));
  var knownIds = {};
  inputs.forEach(function (input) { knownIds[input.dataset.task] = true; });

  /* ── storage ──────────────────────────────────────────────────── */

  function read() {
    var done = {};
    var raw;
    try { raw = window.localStorage.getItem(KEY); } catch (e) { return done; }
    if (!raw) return done;
    try {
      var parsed = JSON.parse(raw);
      var list = parsed && Array.isArray(parsed.done) ? parsed.done : [];
      list.forEach(function (id) { if (typeof id === "string") done[id] = true; });
    } catch (e) { /* corrupt payload — start clean rather than throw */ }
    return done;
  }

  function write(done) {
    var payload = {
      version: VERSION,
      updatedAt: new Date().toISOString(),
      done: Object.keys(done).sort(),
    };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(payload));
    } catch (e) {
      note("Could not save — browser storage is unavailable or full.");
    }
    return payload;
  }

  /*
    Ids no longer in the roadmap are kept in storage rather than pruned, so an
    older export imported after a content change is never silently truncated.
  */
  var state = read();

  /* ── rendering ────────────────────────────────────────────────── */

  function hydrate() {
    inputs.forEach(function (input) {
      input.checked = state[input.dataset.task] === true;
    });
  }

  function countIn(root) {
    var boxes = root.querySelectorAll("input[data-task]");
    var done = 0;
    for (var i = 0; i < boxes.length; i++) if (boxes[i].checked) done++;
    return { done: done, total: boxes.length };
  }

  function setBar(bar, done, total) {
    if (!bar) return;
    var pct = total ? (done / total) * 100 : 0;
    bar.style.width = pct + "%";
    if (bar.parentElement) {
      bar.parentElement.dataset.complete = total > 0 && done === total ? "true" : "false";
    }
  }

  function refresh() {
    var doneAll = 0;
    var totalAll = 0;

    document.querySelectorAll("[data-group]").forEach(function (group) {
      var c = countIn(group);
      var label = group.querySelector("[data-group-count]");
      if (label) label.textContent = c.done + "/" + c.total;
      group.dataset.allDone = c.total > 0 && c.done === c.total ? "true" : "false";
    });

    document.querySelectorAll("[data-phase]").forEach(function (phase) {
      var c = countIn(phase);
      doneAll += c.done;
      totalAll += c.total;

      var label = phase.querySelector("[data-phase-count]");
      if (label) label.textContent = c.done + "/" + c.total;
      phase.dataset.allDone = c.total > 0 && c.done === c.total ? "true" : "false";

      var ring = phase.querySelector("[data-ring]");
      if (ring) {
        var fill = ring.querySelector(".ring-fill");
        var circumference = parseFloat(fill.dataset.circumference);
        var ratio = c.total ? c.done / c.total : 0;
        fill.style.strokeDashoffset = String(circumference * (1 - ratio));
        ring.dataset.complete = c.total > 0 && c.done === c.total ? "true" : "false";
      }
    });

    var pct = totalAll ? Math.round((doneAll / totalAll) * 100) : 0;
    setBar(document.querySelector("[data-total-bar]"), doneAll, totalAll);
    var countEl = document.querySelector("[data-total-count]");
    if (countEl) countEl.innerHTML = "<b>" + doneAll + "</b> of " + totalAll;
    var pctEl = document.querySelector("[data-total-pct]");
    if (pctEl) pctEl.textContent = pct + "%";

    refreshGate();
  }

  function refreshGate() {
    if (!gateEl) return;
    var cleared = 0;

    gate.forEach(function (req, i) {
      var hits = 0;
      for (var j = 0; j < req.taskIds.length; j++) {
        if (state[req.taskIds[j]]) hits++;
      }
      var need = req.atLeast || req.taskIds.length;
      var met = hits >= need;
      if (met) cleared++;

      var row = gateEl.querySelector('[data-gate-req="' + i + '"]');
      if (row) {
        row.dataset.met = met ? "true" : "false";
        var label = row.querySelector(".gate-req-label");
        if (label && req.atLeast) {
          label.textContent = req.label + " — " + Math.min(hits, need) + "/" + need;
        }
      }
    });

    var unlocked = gate.length > 0 && cleared === gate.length;
    gateEl.dataset.unlocked = unlocked ? "true" : "false";

    var doneEl = gateEl.querySelector("[data-gate-done]");
    if (doneEl) doneEl.textContent = String(cleared);
    setBar(gateEl.querySelector("[data-gate-bar]"), cleared, gate.length);

    var status = gateEl.querySelector("[data-gate-status]");
    if (status) status.textContent = unlocked ? "Open" : "Locked";

    var noteEl = gateEl.querySelector("[data-gate-note]");
    if (noteEl && unlocked) {
      noteEl.textContent = "Gate is open. Start applying now and finish the rest of the roadmap alongside interviews.";
    }
  }

  /* ── interaction ──────────────────────────────────────────────── */

  document.addEventListener("change", function (event) {
    var input = event.target;
    if (!input || !input.matches || !input.matches("input[data-task]")) return;
    var id = input.dataset.task;
    if (input.checked) state[id] = true;
    else delete state[id];
    write(state);
    refresh();
  });

  var noteEl = document.querySelector("[data-tool-note]");
  var noteTimer;
  function note(message) {
    if (!noteEl) return;
    noteEl.textContent = message;
    window.clearTimeout(noteTimer);
    noteTimer = window.setTimeout(function () { noteEl.textContent = ""; }, 6000);
  }

  var hideBtn = document.querySelector('[data-tool="hide-done"]');
  if (hideBtn) {
    hideBtn.addEventListener("click", function () {
      var on = document.body.dataset.hideDone !== "true";
      document.body.dataset.hideDone = on ? "true" : "false";
      hideBtn.setAttribute("aria-pressed", on ? "true" : "false");
      hideBtn.textContent = on ? "Show all" : "Hide completed";
    });
  }

  var exportBtn = document.querySelector('[data-tool="export"]');
  if (exportBtn) {
    exportBtn.addEventListener("click", function () {
      var payload = write(state);
      var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      link.download = "ios-roadmap-progress-" + payload.updatedAt.slice(0, 10) + ".json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      note("Exported " + payload.done.length + " completed items.");
    });
  }

  var fileInput = document.querySelector("[data-import-input]");
  var importBtn = document.querySelector('[data-tool="import"]');
  if (importBtn && fileInput) {
    importBtn.addEventListener("click", function () { fileInput.click(); });

    fileInput.addEventListener("change", function () {
      var file = fileInput.files && fileInput.files[0];
      if (!file) return;
      var reader = new FileReader();

      reader.onload = function () {
        var parsed;
        try {
          parsed = JSON.parse(String(reader.result));
        } catch (e) {
          note("That file is not valid JSON.");
          fileInput.value = "";
          return;
        }

        if (!parsed || !Array.isArray(parsed.done)) {
          note("That file has no progress data in it.");
          fileInput.value = "";
          return;
        }
        if (parsed.version !== VERSION) {
          note("That backup is version " + parsed.version + "; this page reads version " + VERSION + ".");
          fileInput.value = "";
          return;
        }

        var ids = parsed.done.filter(function (id) { return typeof id === "string"; });
        var recognised = ids.filter(function (id) { return knownIds[id]; }).length;

        var ok = window.confirm(
          "Replace your current progress with this backup?\n\n" +
          ids.length + " completed items in the file, " + recognised + " of which are on this roadmap.\n" +
          "Your current " + Object.keys(state).length + " will be discarded."
        );
        if (!ok) { fileInput.value = ""; return; }

        state = {};
        ids.forEach(function (id) { state[id] = true; });
        write(state);
        hydrate();
        refresh();
        note("Imported " + recognised + " items.");
        fileInput.value = "";
      };

      reader.onerror = function () {
        note("Could not read that file.");
        fileInput.value = "";
      };

      reader.readAsText(file);
    });
  }

  var resetBtn = document.querySelector('[data-tool="reset"]');
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      var count = Object.keys(state).length;
      if (!count) { note("Nothing to reset."); return; }
      if (!window.confirm("Clear all " + count + " completed items? Export first if you want a backup.")) return;
      state = {};
      try { window.localStorage.removeItem(KEY); } catch (e) { /* nothing to clear */ }
      hydrate();
      refresh();
      note("Progress cleared.");
    });
  }

  hydrate();
  refresh();
})();
