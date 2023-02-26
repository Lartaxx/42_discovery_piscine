window.addEventListener("DOMContentLoaded", function() {
    const btn_new = document.getElementById("btn_new");
    const ft_list = document.getElementById("ft_list");
    const counter_task = document.getElementById("counter_task");

    counter_task.innerHTML = lengthByStartsWith("todo_");

    if (!getItem("counter")) {
        setItem("counter", 0);
    }
    tbVal = load_todo().reverse();

    // Load tasks
    Object.entries(tbVal).forEach(([key, value]) => {
        const div = document.createElement("div");
        div.innerHTML = value;
        div.addEventListener("click", function() {
            if (confirm("Voulez-vous supprimer cette tâche ?")) {
                removeItem(localStorage.key(i));
                location.reload();
            }
        });
        ft_list.insertBefore(div, ft_list.childNodes[`todo_${key}`]);
    })

    // Btn_new click event
    btn_new.addEventListener("click", function() {
        const ask = prompt("Insérer le nom de la tâche à ajouter");
        if (!ask) return;
        setItem(`todo_${parseInt(getItem("counter")) + 1}`, ask);
        setItem("counter", parseInt(getItem("counter")) + 1);
        alert("Tâche ajoutée");
        location.reload();
    });
});

function setItem(name, value) {
    try {
        localStorage.setItem(name, value);
        return true;
    } catch (e) {
        return false;
    }
}

function getItem(name) {
    try {
        return localStorage.getItem(name);
    } catch (e) {
        return null;
    }
}

function removeItem(name) {
    try {
        localStorage.removeItem(name);
        return true;
    } catch (e) {
        return false;
    }
}

function length() {
    try {
        return localStorage.length;
    } catch (e) {
        return 0;
    }
}

function lengthByStartsWith(name) {
    let count = 0;
    for (let i = 0; i < length(); i++) {
        if (localStorage.key(i).startsWith(name)) {
            count++;
        }
    }
    return count;
}


function load_todo(){
    let tb = [];
    for (let i = 0; i < length(); i++) {
        if (localStorage.key(i).startsWith("todo_")) {
            id = localStorage.key(i).split('_');
            val = localStorage.getItem(localStorage.key(i))
            tb[id[1]] = val;
        }
    }
    return tb;
}