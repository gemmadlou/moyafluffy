var app = {};
    app.historyIndex = 0;
    app.history = [Immutable.Map({
        dropdown: {
            open: false
        }
    })];

function ToggleDropdown() {
    var data = app.history[app.historyIndex].get('dropdown');

    if (data.open === false) {
        DropdownOpened();
    } else {
        DropdownClosed();
    }

    app.historyIndex++;

    console.log(app);
}

function DropdownOpened() {
    app.history.push(Immutable.Map({
        dropdown: {
            open: true
        }
    }));
}

function DropdownClosed() {
    app.history.push(Immutable.Map({
        dropdown: {
            open: false
        }
    }));
}

console.log(app);
