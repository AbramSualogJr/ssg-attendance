// --- 1. REGISTRATION LOGIC ---
function register() {
    let username = document.getElementById("registerUsername").value.trim();
    let password = document.getElementById("registerPassword").value;
    let confirm = document.getElementById("confirmPassword").value;
    let role = document.getElementById("role").value;

    if (!username || !password) {
        alert("Please fill out all fields.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    const user = { username, password, role, fullName: "", email: "", course: "" };
    localStorage.setItem(username, JSON.stringify(user));

    if (role === "Student") {
        const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
        const alreadyExists = records.some(r => r.linkedAccount === username);
        if (!alreadyExists) {
            records.push({
                id: username,
                name: username,
                course: "",
                logTime: "---",
                logOutTime: "---",
                status: "Absent",
                linkedAccount: username
            });
            localStorage.setItem("attendanceRecords", JSON.stringify(records));
        }
    }

    alert("Registration Successful!");
}

// --- 2. LOGIN LOGIC ---
function login() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value;

    const data = localStorage.getItem(username);

    if (!data) {
        alert("User not found");
        return;
    }

    const user = JSON.parse(data);

    if (user.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`Welcome ${user.username} (${user.role})`);
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect password");
    }
}

// --- 3. ATTENDANCE RECORD MANAGEMENT ---
if (!localStorage.getItem("attendanceRecords")) {
    const defaultRecords = [
        { id: "2026-0001", name: "John Doe",     course: "BSIT", logTime: "07:45 AM", logOutTime: "12:15 PM", status: "Present" },
        { id: "2026-0002", name: "Jane Smith",   course: "BSCS", logTime: "07:48 AM", logOutTime: "---",      status: "Present" },
        { id: "2026-0003", name: "Mark Johnson", course: "BSBA", logTime: "---",      logOutTime: "---",      status: "Absent"  }
    ];
    localStorage.setItem("attendanceRecords", JSON.stringify(defaultRecords));
}

// --- 3B. SEED DATA: 30 FILIPINO STUDENT ACCOUNTS ---
if (!localStorage.getItem("seedDataV1")) {
    const seedStudents = [
        { username: "jdelacruz",   fullName: "Juan dela Cruz",       course: "BSIT",    id: "2026-0004", logTime: "07:32 AM", logOutTime: "12:30 PM", status: "Present" },
        { username: "msantos",     fullName: "Maria Santos",          course: "BSIT",    id: "2026-0005", logTime: "07:45 AM", logOutTime: "11:45 AM", status: "Present" },
        { username: "creyes",      fullName: "Carlo Reyes",           course: "BSIT",    id: "2026-0006", logTime: "08:01 AM", logOutTime: "---",      status: "Present" },
        { username: "amendoza",    fullName: "Ana Mendoza",           course: "BSIT",    id: "2026-0007", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "jramos",      fullName: "Jose Ramos",            course: "BSCS",    id: "2026-0008", logTime: "07:55 AM", logOutTime: "12:00 PM", status: "Present" },
        { username: "lvillanueva", fullName: "Lorna Villanueva",      course: "BSCS",    id: "2026-0009", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "mcastro",     fullName: "Miguel Castro",         course: "BSCS",    id: "2026-0010", logTime: "07:40 AM", logOutTime: "01:10 PM", status: "Present" },
        { username: "saquino",     fullName: "Sophia Aquino",         course: "BSCS",    id: "2026-0011", logTime: "07:36 AM", logOutTime: "---",      status: "Present" },
        { username: "rbautista",   fullName: "Rodrigo Bautista",      course: "BSBA",    id: "2026-0012", logTime: "07:58 AM", logOutTime: "11:50 AM", status: "Present" },
        { username: "tgarcia",     fullName: "Teresita Garcia",       course: "BSBA",    id: "2026-0013", logTime: "08:12 AM", logOutTime: "---",      status: "Present" },
        { username: "etorres",     fullName: "Emmanuel Torres",       course: "BSBA",    id: "2026-0014", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "mflores",     fullName: "Maribel Flores",        course: "BSEd",    id: "2026-0015", logTime: "07:30 AM", logOutTime: "01:00 PM", status: "Present" },
        { username: "dhernandez",  fullName: "Danilo Hernandez",      course: "BSEd",    id: "2026-0016", logTime: "07:49 AM", logOutTime: "---",      status: "Present" },
        { username: "cnavarro",    fullName: "Cristina Navarro",      course: "BSEd",    id: "2026-0017", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "nespinosa",   fullName: "Noel Espinosa",         course: "BSN",     id: "2026-0018", logTime: "07:22 AM", logOutTime: "12:20 PM", status: "Present" },
        { username: "rpascual",    fullName: "Rowena Pascual",        course: "BSN",     id: "2026-0019", logTime: "07:38 AM", logOutTime: "11:35 AM", status: "Present" },
        { username: "adelarosa",   fullName: "Ariel dela Rosa",       course: "BSN",     id: "2026-0020", logTime: "08:05 AM", logOutTime: "---",      status: "Present" },
        { username: "faguila",     fullName: "Fernando Aguila",       course: "BSCE",    id: "2026-0021", logTime: "07:44 AM", logOutTime: "12:10 PM", status: "Present" },
        { username: "jmorales",    fullName: "Josefina Morales",      course: "BSCE",    id: "2026-0022", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "rsantiago",   fullName: "Renato Santiago",       course: "BSCE",    id: "2026-0023", logTime: "07:52 AM", logOutTime: "---",      status: "Present" },
        { username: "bdizon",      fullName: "Benito Dizon",          course: "BSEE",    id: "2026-0024", logTime: "07:35 AM", logOutTime: "12:55 PM", status: "Present" },
        { username: "ecruz",       fullName: "Elena Cruz",            course: "BSEE",    id: "2026-0025", logTime: "08:18 AM", logOutTime: "---",      status: "Present" },
        { username: "amanalo",     fullName: "Arnaldo Manalo",        course: "BSEE",    id: "2026-0026", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "rocampo",     fullName: "Ricardo Ocampo",        course: "BSME",    id: "2026-0027", logTime: "07:27 AM", logOutTime: "11:40 AM", status: "Present" },
        { username: "cfigueroa",   fullName: "Cecilia Figueroa",      course: "BSME",    id: "2026-0028", logTime: "07:41 AM", logOutTime: "---",      status: "Present" },
        { username: "pvaldez",     fullName: "Pedro Valdez",          course: "BSME",    id: "2026-0029", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "aignacio",    fullName: "Antonio Ignacio",       course: "BSCRIM",  id: "2026-0030", logTime: "07:29 AM", logOutTime: "12:35 PM", status: "Present" },
        { username: "gmarcelo",    fullName: "Gloria Marcelo",        course: "BSCRIM",  id: "2026-0031", logTime: "08:03 AM", logOutTime: "---",      status: "Present" },
        { username: "aperalta",    fullName: "Alfredo Peralta",       course: "BSCRIM",  id: "2026-0032", logTime: "07:47 AM", logOutTime: "12:05 PM", status: "Present" },
        { username: "dsoriano",    fullName: "Dolores Soriano",       course: "BSPSYCH", id: "2026-0033", logTime: "---",      logOutTime: "---",      status: "Absent"  },
        { username: "eibarra",     fullName: "Eduardo Ibarra",        course: "BSPSYCH", id: "2026-0034", logTime: "07:53 AM", logOutTime: "---",      status: "Present" },
        { username: "frizal",      fullName: "Felicia Rizal",         course: "BSPSYCH", id: "2026-0035", logTime: "08:10 AM", logOutTime: "12:50 PM", status: "Present" },
    ];

    seedStudents.forEach(s => {
        if (!localStorage.getItem(s.username)) {
            localStorage.setItem(s.username, JSON.stringify({
                username: s.username,
                password: "student123",
                role: "Student",
                fullName: s.fullName,
                email: "",
                course: s.course
            }));
        }
    });

    const existingRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const existingIds = new Set(existingRecords.map(r => r.id));
    seedStudents.forEach(s => {
        if (!existingIds.has(s.id)) {
            existingRecords.push({
                id: s.id,
                name: s.fullName,
                course: s.course,
                logTime: s.logTime,
                logOutTime: s.logOutTime,
                status: s.status,
                linkedAccount: s.username
            });
        }
    });
    localStorage.setItem("attendanceRecords", JSON.stringify(existingRecords));
    localStorage.setItem("seedDataV1", "true");
}

function updateDashboardStats() {
    const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const totalEl = document.getElementById("totalStudentsCount");
    const rateEl = document.getElementById("attendanceRateCount");
    const eventsCountEl = document.getElementById("eventsCount");

    if (totalEl) {
        totalEl.textContent = records.length;
    }

    if (rateEl) {
        if (records.length > 0) {
            const presentCount = records.filter(r => r.status === "Present").length;
            rateEl.textContent = Math.round((presentCount / records.length) * 100) + "%";
        } else {
            rateEl.textContent = "0%";
        }
    }

    if (eventsCountEl) {
        const events = JSON.parse(localStorage.getItem("globalEvents")) || [];
        const now = new Date();
        const thisMonthEvents = events.filter(e => {
            const d = new Date(e.date + "T00:00:00");
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        });
        eventsCountEl.textContent = thisMonthEvents.length;
    }
}

function toggleAttendanceRecord(index) {
    const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    if (!records[index]) return;
    records[index].status = records[index].status === "Present" ? "Absent" : "Present";
    localStorage.setItem("attendanceRecords", JSON.stringify(records));
    renderAttendanceTable();
}

function removeStudentRecord(index) {
    const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    if (!records[index]) return;
    const studentName = records[index].name;
    if (!confirm(`Remove "${studentName}" from the roster? This cannot be undone.`)) return;
    records.splice(index, 1);
    localStorage.setItem("attendanceRecords", JSON.stringify(records));
    renderAttendanceTable();
}


function renderAttendanceTable() {
    const tbody = document.getElementById("attendanceTbody");
    if (!tbody) return;

    const sessionData = localStorage.getItem("currentUser");
    const currentUser = sessionData ? JSON.parse(sessionData) : null;
    const role = currentUser ? currentUser.role : "Student";
    const isAdmin = role === "Admin" || role === "Teacher";

    const courseFilter = document.getElementById("courseFilter");
    const selectedCourse = courseFilter ? courseFilter.value : "";

    const allRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const filtered = selectedCourse
        ? allRecords.filter(r => r.course === selectedCourse)
        : allRecords;

    const rosterTitle = document.getElementById("rosterTitle");
    const rosterCount = document.getElementById("rosterCount");
    if (rosterTitle) {
        rosterTitle.textContent = selectedCourse ? `${selectedCourse} Roster` : "All Students";
    }
    if (rosterCount) {
        rosterCount.textContent = `${filtered.length} student${filtered.length !== 1 ? "s" : ""}`;
    }

    tbody.innerHTML = "";

    filtered.forEach((record) => {
        const trueIndex = allRecords.indexOf(record);
        const tr = document.createElement("tr");
        const statusColor = record.status === "Present" ? "#26c36a" : "#dc3545";
        const logOutDisplay = record.logOutTime && record.logOutTime !== "---" ? record.logOutTime : "---";

        tr.innerHTML = `
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.course}</td>
            <td>${record.logTime}</td>
            <td>${logOutDisplay}</td>
            <td class="status-cell" style="color: ${statusColor}; font-weight: bold;">${record.status}</td>
            <td style="display: ${isAdmin ? 'table-cell' : 'none'};">
                <button class="action-btn" onclick="toggleAttendanceRecord(${trueIndex})">Toggle</button>
                <button class="action-btn edit-student-btn" style="margin-left: 5px;" data-index="${trueIndex}">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
                <button class="action-btn" style="margin-left: 5px; background: #dc3545;" onclick="removeStudentRecord(${trueIndex})">
                    <i class="fa-solid fa-trash"></i> Remove
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// --- 4. FULLY FUNCTIONAL DYNAMIC CALENDAR ARCHITECTURE ---
if (!localStorage.getItem("globalEvents")) {
    const defaultEvents = [
        { date: "2026-06-04", name: "SSG General Assembly Meeting" },
        { date: "2026-06-10", name: "Academics Day & Quiz Bee" },
        { date: "2026-06-23", name: "School Foundation Day Parade" }
    ];
    localStorage.setItem("globalEvents", JSON.stringify(defaultEvents));
}

let currentDateObject = new Date();

function renderDynamicCalendar() {
    const gridContainer = document.getElementById("calendarGrid");
    const monthYearTitle = document.getElementById("calendarMonthYear");

    if (!gridContainer || !monthYearTitle) return;

    gridContainer.innerHTML = "";

    const year = currentDateObject.getFullYear();
    const month = currentDateObject.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    monthYearTitle.textContent = `${monthNames[month]} ${year}`;

    dayNames.forEach(day => {
        const structuralHeaderBlock = document.createElement("div");
        structuralHeaderBlock.className = "day-name";
        structuralHeaderBlock.textContent = day;
        gridContainer.appendChild(structuralHeaderBlock);
    });

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
        const blankGridBlock = document.createElement("div");
        blankGridBlock.className = "day empty";
        gridContainer.appendChild(blankGridBlock);
    }

    const storedEvents = JSON.parse(localStorage.getItem("globalEvents")) || [];
    const sessionData = localStorage.getItem("currentUser");
    const currentUser = sessionData ? JSON.parse(sessionData) : null;
    const role = currentUser ? currentUser.role : "Student";

    for (let dayNumber = 1; dayNumber <= totalDaysInMonth; dayNumber++) {
        const numericDateNode = document.createElement("div");
        numericDateNode.className = "day";
        numericDateNode.textContent = dayNumber;

        const formattingMonthStr = String(month + 1).padStart(2, '0');
        const formattingDayStr = String(dayNumber).padStart(2, '0');
        const absoluteLookupToken = `${year}-${formattingMonthStr}-${formattingDayStr}`;

        const foundMatchEvent = storedEvents.find(evt => evt.date === absoluteLookupToken);

        if (foundMatchEvent) {
            numericDateNode.classList.add("event-marked");
            numericDateNode.setAttribute("data-event", foundMatchEvent.name);

            numericDateNode.addEventListener("click", () => {
                const detailsBox = document.getElementById("eventDetailsBox");
                if (detailsBox) {
                    detailsBox.style.display = "block";
                    let detailsHTML = `<p><strong>Event Date (${absoluteLookupToken}):</strong> ${foundMatchEvent.name}</p>`;

                    if (role === "Admin" || role === "Teacher") {
                        detailsHTML += `
                            <button class="delete-event-btn" data-date="${absoluteLookupToken}"
                                style="background: #dc3545; color: white; border: none; padding: 6px 12px; margin-top: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 12px;">
                                <i class="fa-solid fa-trash-can"></i> Delete Event
                            </button>
                        `;
                    }

                    detailsBox.innerHTML = detailsHTML;

                    const deleteBtn = detailsBox.querySelector(".delete-event-btn");
                    if (deleteBtn) {
                        deleteBtn.addEventListener("click", (e) => {
                            const targetDate = e.target.closest('button').getAttribute("data-date");
                            if (confirm(`Are you sure you want to remove the event on ${targetDate}?`)) {
                                let activeEventsList = JSON.parse(localStorage.getItem("globalEvents")) || [];
                                activeEventsList = activeEventsList.filter(evt => evt.date !== targetDate);
                                localStorage.setItem("globalEvents", JSON.stringify(activeEventsList));
                                alert("Event successfully removed.");
                                detailsBox.style.display = "none";
                                renderDynamicCalendar();
                            }
                        });
                    }
                }
            });
        }

        gridContainer.appendChild(numericDateNode);
    }
}

// --- 5. UNIFIED CORE RUNTIME CONTROLLER ---
document.addEventListener("DOMContentLoaded", () => {
    const sessionData = localStorage.getItem("currentUser");
    if (!sessionData) return;

    let currentUser = JSON.parse(sessionData);
    const username = currentUser.username;
    const role = currentUser.role;

    // A0. Hamburger Sidebar Toggle (mobile)
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebar = document.getElementById("sidebar");

    if (hamburgerBtn && sidebar && sidebarOverlay) {
        hamburgerBtn.addEventListener("click", () => {
            sidebar.classList.toggle("sidebar-open");
            sidebarOverlay.classList.toggle("active");
        });
        sidebarOverlay.addEventListener("click", () => {
            sidebar.classList.remove("sidebar-open");
            sidebarOverlay.classList.remove("active");
        });
        sidebar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("sidebar-open");
                sidebarOverlay.classList.remove("active");
            });
        });
    }

    // A. Sidebar Profile Card Display Injection
    const profileUsername = document.getElementById("profileUsername");
    const profileRole = document.getElementById("profileRole");

    if (profileUsername && profileRole) {
        const displayName = currentUser.fullName || username;
        profileUsername.innerHTML = `<i class="fa-solid fa-circle-user"></i> ${displayName}`;
        profileRole.textContent = role;
        profileRole.style.color = "#26c36a";
    }

    // B. PROFILE EDIT MODAL INTERACTION LOGIC
    const userProfileBox = document.getElementById("userProfileBox");
    const profileModal = document.getElementById("profileModal");
    const closeProfileModalBtn = document.getElementById("closeProfileModalBtn");
    const saveProfileBtn = document.getElementById("saveProfileBtn");

    if (userProfileBox && profileModal && closeProfileModalBtn && saveProfileBtn) {

        userProfileBox.addEventListener("click", () => {
            const dbAccountData = JSON.parse(localStorage.getItem(username)) || currentUser;

            document.getElementById("editProfileUsername").value = username;
            document.getElementById("editProfileFullName").value = dbAccountData.fullName || "";
            document.getElementById("editProfileEmail").value = dbAccountData.email || "";
            document.getElementById("editProfileCourse").value = dbAccountData.course || "";

            profileModal.style.display = "flex";
        });

        closeProfileModalBtn.addEventListener("click", () => {
            profileModal.style.display = "none";
        });

        saveProfileBtn.addEventListener("click", () => {
            const updatedFullName = document.getElementById("editProfileFullName").value.trim();
            const updatedEmail = document.getElementById("editProfileEmail").value.trim();
            const updatedCourse = document.getElementById("editProfileCourse").value;

            const fullAccountData = JSON.parse(localStorage.getItem(username));
            fullAccountData.fullName = updatedFullName;
            fullAccountData.email = updatedEmail;
            fullAccountData.course = updatedCourse;
            localStorage.setItem(username, JSON.stringify(fullAccountData));

            currentUser.fullName = updatedFullName;
            currentUser.email = updatedEmail;
            currentUser.course = updatedCourse;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            if (role === "Student") {
                const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
                const recIdx = records.findIndex(r => r.linkedAccount === username);
                if (recIdx !== -1) {
                    if (updatedFullName) records[recIdx].name = updatedFullName;
                    if (updatedCourse) records[recIdx].course = updatedCourse;
                    localStorage.setItem("attendanceRecords", JSON.stringify(records));
                }
            }

            const currentFinalName = updatedFullName || username;
            profileUsername.innerHTML = `<i class="fa-solid fa-circle-user"></i> ${currentFinalName}`;

            alert("Profile metadata updated successfully!");
            profileModal.style.display = "none";
        });
    }

    // C. Dashboard Title & Card Handlers
    const dashboardTitle = document.getElementById("dashboardTitle");
    if (dashboardTitle) {
        dashboardTitle.textContent = `${role} Dashboard`;
        updateDashboardStats();
    }

    const adminControlsPanel = document.getElementById("adminControlsPanel");
    if (adminControlsPanel) {
        if (role === "Admin" || role === "Teacher") {
            adminControlsPanel.style.display = "block";
        } else {
            adminControlsPanel.style.display = "none";
        }
    }

    // D. Attendance Table Render & Admin Column Header Visibility
    const adminColHeaders = document.querySelectorAll("th.admin-col");
    adminColHeaders.forEach(th => {
        th.style.display = (role === "Admin" || role === "Teacher") ? "table-cell" : "none";
    });

    const adminStudentToolbar = document.getElementById("adminStudentToolbar");
    if (adminStudentToolbar && (role === "Admin" || role === "Teacher")) {
        adminStudentToolbar.style.display = "block";
    }

    const attendanceTbody = document.getElementById("attendanceTbody");
    if (attendanceTbody) {
        renderAttendanceTable();

        const courseFilter = document.getElementById("courseFilter");
        if (courseFilter) {
            courseFilter.addEventListener("change", renderAttendanceTable);
        }

        const addStudentModal = document.getElementById("addStudentModal");
        const openAddStudentBtn = document.getElementById("openAddStudentBtn");
        const closeAddStudentBtn = document.getElementById("closeAddStudentBtn");
        const saveAddStudentBtn = document.getElementById("saveAddStudentBtn");

        if (addStudentModal && openAddStudentBtn && closeAddStudentBtn && saveAddStudentBtn) {
            openAddStudentBtn.addEventListener("click", () => {
                document.getElementById("addStudentId").value = "";
                document.getElementById("addStudentName").value = "";
                document.getElementById("addStudentCourse").value = "";
                document.getElementById("addStudentStatus").value = "Absent";
                addStudentModal.style.display = "flex";
            });

            closeAddStudentBtn.addEventListener("click", () => {
                addStudentModal.style.display = "none";
            });

            saveAddStudentBtn.addEventListener("click", () => {
                const newId = document.getElementById("addStudentId").value.trim();
                const newName = document.getElementById("addStudentName").value.trim();
                const newCourse = document.getElementById("addStudentCourse").value;
                const newStatus = document.getElementById("addStudentStatus").value;

                if (!newId || !newName) {
                    alert("Student ID and Full Name are required.");
                    return;
                }

                const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
                const duplicate = records.some(r => r.id === newId);
                if (duplicate) {
                    alert(`A student with ID "${newId}" already exists in the roster.`);
                    return;
                }

                records.push({ id: newId, name: newName, course: newCourse, logTime: "---", logOutTime: "---", status: newStatus });
                localStorage.setItem("attendanceRecords", JSON.stringify(records));
                alert(`"${newName}" has been added to the roster.`);
                addStudentModal.style.display = "none";
                renderAttendanceTable();
            });
        }

        const editStudentModal = document.getElementById("editStudentModal");
        const closeEditStudentBtn = document.getElementById("closeEditStudentBtn");
        const saveEditStudentBtn = document.getElementById("saveEditStudentBtn");

        if (editStudentModal && closeEditStudentBtn && saveEditStudentBtn) {
            document.addEventListener("click", (e) => {
                const editBtn = e.target.closest(".edit-student-btn");
                if (editBtn) {
                    const idx = parseInt(editBtn.getAttribute("data-index"));
                    const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
                    const rec = records[idx];
                    if (!rec) return;

                    document.getElementById("editStudentIndex").value = idx;
                    document.getElementById("editStudentId").value = rec.id;
                    document.getElementById("editStudentName").value = rec.name;
                    document.getElementById("editStudentCourse").value = rec.course;
                    document.getElementById("editStudentLogTime").value = rec.logTime;
                    document.getElementById("editStudentLogOutTime").value = rec.logOutTime || "---";
                    document.getElementById("editStudentStatus").value = rec.status;

                    editStudentModal.style.display = "flex";
                }
            });

            closeEditStudentBtn.addEventListener("click", () => {
                editStudentModal.style.display = "none";
            });

            saveEditStudentBtn.addEventListener("click", () => {
                const idx = parseInt(document.getElementById("editStudentIndex").value);
                const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];

                records[idx] = {
                    ...records[idx],
                    id: document.getElementById("editStudentId").value.trim(),
                    name: document.getElementById("editStudentName").value.trim(),
                    course: document.getElementById("editStudentCourse").value,
                    logTime: document.getElementById("editStudentLogTime").value.trim(),
                    logOutTime: document.getElementById("editStudentLogOutTime").value.trim() || "---",
                    status: document.getElementById("editStudentStatus").value
                };

                localStorage.setItem("attendanceRecords", JSON.stringify(records));
                alert("Student record updated successfully!");
                editStudentModal.style.display = "none";
                renderAttendanceTable();
            });
        }
    }

    // E. Extra Dashboard Event Button Incrementor
    const addEventBtn = document.getElementById("addEventBtn");
    if (addEventBtn) {
        addEventBtn.addEventListener("click", () => {
            const newEventName = document.getElementById("newEventName").value.trim();
            const eventsCountEl = document.getElementById("eventsCount");

            if (newEventName === "") {
                alert("Please type an event name first.");
                return;
            }

            if (eventsCountEl) {
                let currentCount = parseInt(eventsCountEl.textContent);
                eventsCountEl.textContent = currentCount + 1;
            }

            alert(`Successfully added event: "${newEventName}"`);
            document.getElementById("newEventName").value = "";
        });
    }

    // F. Initialize & Control Calendar Features
    const gridContainer = document.getElementById("calendarGrid");
    if (gridContainer) {
        renderDynamicCalendar();

        const prevBtn = document.getElementById("prevMonthBtn");
        const nextBtn = document.getElementById("nextMonthBtn");

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener("click", () => {
                currentDateObject.setMonth(currentDateObject.getMonth() - 1);
                renderDynamicCalendar();
            });
            nextBtn.addEventListener("click", () => {
                currentDateObject.setMonth(currentDateObject.getMonth() + 1);
                renderDynamicCalendar();
            });
        }

        const adminCalendarControls = document.getElementById("adminCalendarControls");
        if (adminCalendarControls) {
            if (role === "Admin" || role === "Teacher") {
                adminCalendarControls.style.display = "block";
            } else {
                adminCalendarControls.style.display = "none";
            }
        }

        const saveCalendarEventBtn = document.getElementById("saveCalendarEventBtn");
        if (saveCalendarEventBtn) {
            saveCalendarEventBtn.addEventListener("click", () => {
                const inputDateValue = document.getElementById("calendarEventDate").value;
                const inputNameValue = document.getElementById("calendarEventName").value.trim();

                if (!inputDateValue || !inputNameValue) {
                    alert("Please select a valid date and enter an event title.");
                    return;
                }

                const activeEventsList = JSON.parse(localStorage.getItem("globalEvents")) || [];
                activeEventsList.push({ date: inputDateValue, name: inputNameValue });

                localStorage.setItem("globalEvents", JSON.stringify(activeEventsList));

                alert(`Successfully scheduled "${inputNameValue}" for ${inputDateValue}!`);

                document.getElementById("calendarEventName").value = "";
                document.getElementById("calendarEventDate").value = "";

                currentDateObject = new Date(inputDateValue);
                renderDynamicCalendar();
            });
        }
    }
});
