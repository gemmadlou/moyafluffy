var app = {};
    app.historyIndex = 0;
    app.history = [Immutable.Map({
        dropdown: {
            open: false
        }
    })];

function OpenDropdown(id) {
    var data = app.history[app.historyIndex].get('dropdown');
    var elem = document.getElementById(id);
    var openClass = 'slider-open';

    elem.classList.add(openClass);
    DropdownOpened();
    app.historyIndex++;
}

function CloseDropdown(id) {
    var data = app.history[app.historyIndex].get('dropdown');
    var elem = document.getElementById(id);
    var openClass = 'slider-open';

    elem.classList.remove(openClass);
    DropdownClosed();
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
