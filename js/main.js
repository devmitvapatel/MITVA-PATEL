/* =========================================================
   MITVA — PORTFOLIO SCRIPTS (jQuery)
   ========================================================= */

$(function () {
    "use strict";

    var $win = $(window);
    var $body = $("body");

    /* ---------- Profile placeholders ---------- */
    $(".js-name").text(PROFILE.name);
    $(".js-initials").text(PROFILE.initials);
    if (PROFILE.photo) $(".js-avatar").html($("<img>", { src: PROFILE.photo, alt: PROFILE.name }));
    $(".js-email").text(PROFILE.email);
    $(".js-phone").text(PROFILE.phone);
    $(".js-location").text(PROFILE.location);
    $(".js-address").text(PROFILE.address);
    $(".js-linkedin").text(PROFILE.linkedin);
    $(".js-github").text(PROFILE.github);
    $(".js-email-link").attr("href", "mailto:" + PROFILE.email);
    $(".js-phone-link").attr("href", "tel:" + PROFILE.phone.replace(/\s/g, ""));
    if (PROFILE.linkedin) $(".js-linkedin-link").attr("href", "https://" + PROFILE.linkedin);
    else $(".js-linkedin-link").remove();
    if (PROFILE.github) $(".js-github-link").attr("href", "https://" + PROFILE.github);
    else $(".js-github-link").remove();
    $(".js-notice").text(PROFILE.noticePeriod);
    $(".js-resume").attr({ href: PROFILE.resume, target: "_blank", rel: "noopener" });
    $(".js-whatsapp").attr("href", "https://wa.me/" + PROFILE.whatsapp + "?text=" + encodeURIComponent("Hi " + PROFILE.firstName + ", I visited your portfolio and would like to connect."));
    $(".js-education").text($.map(EDUCATION, function (e) { return e.degree + " — " + e.school + " (" + e.period + ")"; }).join(" • "));
    $("#year").text(new Date().getFullYear());

    /* ---------- Navbar, progress bar & active link ---------- */
    var $navbar = $("#navbar");
    var $sections = $("section[id]");

    function onScroll() {
        var scrollTop = $win.scrollTop();
        var docHeight = $(document).height() - $win.height();

        $navbar.toggleClass("scrolled", scrollTop > 20);
        $("#scrollProgress").css("width", (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + "%");

        var current = "";
        $sections.each(function () {
            if (scrollTop >= $(this).offset().top - 140) current = this.id;
        });
        $(".nav-links a").removeClass("active").filter('[href="#' + current + '"]').addClass("active");

        revealOnScroll();
    }
    $win.on("scroll resize", onScroll);

    /* ---------- Fullscreen menu ---------- */
    $("#menuBtn").on("click", function () {
        $(this).toggleClass("open");
        $("#menuOverlay").toggleClass("open");
        $body.toggleClass("no-scroll");
    });
    $(".menu-list a").on("click", closeMenu);

    function closeMenu() {
        $("#menuBtn").removeClass("open");
        $("#menuOverlay").removeClass("open");
        $body.removeClass("no-scroll");
    }

    /* ---------- Reveal on scroll ---------- */
    function revealOnScroll() {
        var trigger = $win.scrollTop() + $win.height() * 0.9;
        $(".reveal:not(.visible)").each(function () {
            if ($(this).offset().top < trigger) $(this).addClass("visible");
        });
        animateCounters();
    }

    /* ---------- Typing effect ---------- */
    var roles = [
        "CRM & HRMS modules",
        "ASP.NET Core Web APIs",
        "optimised SQL stored procedures",
        "Hangfire background jobs",
        "SignalR real-time alerts"
    ];
    var roleIndex = 0, charIndex = 0, deleting = false;

    (function typeLoop() {
        var word = roles[roleIndex];
        charIndex += deleting ? -1 : 1;
        $("#typingText").text(word.substring(0, charIndex));

        var delay = deleting ? 40 : 85;
        if (!deleting && charIndex === word.length) { delay = 1800; deleting = true; }
        else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 400; }
        setTimeout(typeLoop, delay);
    })();

    /* ---------- Hire me: freelance / full-time tabs ---------- */
    function setHireTab(tab) {
        $(".hire-tab").removeClass("active").filter('[data-tab="' + tab + '"]').addClass("active");
        $(".hire-panel").removeClass("active").filter('[data-panel="' + tab + '"]').addClass("active");
    }
    $(".hire-tab").on("click", function () { setHireTab($(this).data("tab")); });
    $(document).on("click", "[data-hire]", function () {
        setHireTab($(this).data("hire"));
        setInquiry($(this).data("hire"));
    });
    $(document).on("click", "[data-inquiry]", function () { setInquiry($(this).data("inquiry")); });

    function setInquiry(type) {
        $('#inquiryTypes input[value="' + type + '"]').prop("checked", true);
        toggleInquiryFields(type);
    }

    function toggleInquiryFields(type) {
        $(".inquiry-fields").each(function () {
            var types = String($(this).data("for")).split(" ");
            $(this).toggle($.inArray(type, types) !== -1);
        });
        var placeholders = {
            freelance: "Tell me about your project — goals, features, tech preferences...",
            job: "Tell me about the role, team and hiring process...",
            contract: "Tell me about the contract — duration, scope and engagement type..."
        };
        $("#cMessage").attr("placeholder", placeholders[type]);
    }
    $("#inquiryTypes").on("change", "input", function () { toggleInquiryFields(this.value); });

    /* ---------- Counters ---------- */
    function animateCounters() {
        var trigger = $win.scrollTop() + $win.height() * 0.95;
        $(".counter:not(.done)").each(function () {
            var $el = $(this);
            if ($el.offset().top > trigger) return;
            $el.addClass("done");
            countUp($el, parseFloat($el.data("target")), parseInt($el.data("decimals") || 0, 10));
        });
    }

    function countUp($el, target, decimals) {
        $({ n: 0 }).animate({ n: target }, {
            duration: 1600,
            easing: "swing",
            step: function (now) { $el.text(decimals ? now.toFixed(decimals) : Math.round(now)); },
            complete: function () { $el.text(decimals ? target.toFixed(decimals) : target); }
        });
    }

    /* ---------- Skills: category tabs + card grid ---------- */
    var skillCats = [
        { key: "backend", label: "Backend", icon: "fa-solid fa-server", desc: "C# and ASP.NET Core — APIs, business logic and security." },
        { key: "database", label: "Database", icon: "fa-solid fa-database", desc: "SQL Server design — stored procedures, functions, triggers, views and query tuning." },
        { key: "services", label: "Cloud & Real-time", icon: "fa-solid fa-bolt", desc: "Background jobs, live notifications, file storage and email automation." },
        { key: "frontend", label: "Frontend", icon: "fa-solid fa-display", desc: "React.js ecosystem plus jQuery, Bootstrap and responsive UI." },
        { key: "tools", label: "Tools", icon: "fa-solid fa-screwdriver-wrench", desc: "Everyday IDEs, version control and API tooling." }
    ];

    function skillTier(level) {
        if (level >= 90) return { key: "expert", label: "Expert" };
        if (level >= 84) return { key: "advanced", label: "Advanced" };
        if (level >= 70) return { key: "proficient", label: "Proficient" };
        return { key: "familiar", label: "Familiar" };
    }

    function skillIconHtml(s) {
        return '<i class="' + s.icon + '" style="' + (s.icon.indexOf("colored") === -1 ? "color:" + s.color : "") + '"></i>';
    }

    function skillCardHtml(s, i, n) {
        var tier = skillTier(s.level);
        return '<div class="skill-card" data-index="' + i + '" role="button" tabindex="0" style="--skill:' + s.color + ';animation-delay:' + (n * 0.05) + 's">' +
                '<div class="skill-card-top">' +
                    '<span class="skill-card-icon">' + skillIconHtml(s) + '</span>' +
                    '<span class="skill-badge skill-badge--' + tier.key + '">' + tier.label + '</span>' +
                '</div>' +
                '<strong class="skill-card-name">' + s.name + '</strong>' +
                '<span class="skill-card-tag">' + s.tag + '</span>' +
                '<div class="skill-bar"><span style="--w:' + s.level + '%;animation-delay:' + (0.15 + n * 0.05) + 's"></span></div>' +
                '<div class="skill-card-foot"><span>' + expLabel(s.years) + '</span><span class="skill-card-more">Details <i class="fa-solid fa-arrow-right"></i></span></div>' +
            '</div>';
    }

    function skillsIn(cat) {
        var items = [];
        $.each(SKILLS, function (i, s) { if (s.cat === cat) items.push(i); });
        return items;
    }

    $("#skillTabs").html($.map(skillCats, function (c, i) {
        return '<button class="skill-tab' + (i === 0 ? " active" : "") + '" data-cat="' + c.key + '" role="tab" aria-selected="' + (i === 0) + '">' +
                '<span class="skill-tab-icon"><i class="' + c.icon + '"></i></span>' +
                '<span class="skill-tab-label">' + c.label + '</span>' +
                '<span class="skill-tab-count mono">' + skillsIn(c.key).length + '</span>' +
            '</button>';
    }).join(""));

    function renderSkills(cat) {
        var c = $.grep(skillCats, function (x) { return x.key === cat; })[0];
        var items = skillsIn(cat);
        $("#skillPanelHead").html(
            '<div><h3>' + c.label + '</h3><p>' + c.desc + '</p></div>' +
            '<span class="mono">' + items.length + ' skills • click for details</span>'
        );
        $("#skillsGrid").html($.map(items, function (i, n) { return skillCardHtml(SKILLS[i], i, n); }).join(""));
    }
    renderSkills(skillCats[0].key);

    $("#skillTabs").on("click", ".skill-tab", function () {
        $("#skillTabs .skill-tab").removeClass("active").attr("aria-selected", "false");
        $(this).addClass("active").attr("aria-selected", "true");
        renderSkills($(this).data("cat"));
    });

    $("#skillsGrid")
        .on("keydown", ".skill-card", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); $(this).trigger("click"); }
        })
        .on("click", ".skill-card", function () {
            var s = SKILLS[$(this).data("index")];
            var points = $.map(s.points, function (p) { return "<li>" + p + "</li>"; }).join("");
            var tier = skillTier(s.level);
            openModal(
                '<div class="modal-label">' + s.tag + '</div>' +
                '<div class="modal-skill-head">' +
                    '<div class="skill-icon">' + skillIconHtml(s) + '</div>' +
                    '<h3 class="modal-title" style="margin:0">' + s.name + '</h3>' +
                '</div>' +
                '<p class="modal-text">' + s.desc + '</p>' +
                '<div class="skill-level-row"><span>' + expLabel(s.years) + '</span><span class="skill-badge skill-badge--' + tier.key + '">' + tier.label + '</span></div>' +
                '<div class="modal-sub">Key capabilities</div>' +
                '<ul class="modal-list">' + points + '</ul>'
            );
        });

    /* ---------- Projects ---------- */
    $("#projectFilters").append($.map(PROJECT_FILTERS, function (f, i) {
        return '<button class="filter-btn' + (i === 0 ? " active" : "") + '" data-filter="' + f.key + '">' + f.label + '</button>';
    }).join(""));

    function renderProjects(filter) {
        var html = "";
        var shown = 0;
        $.each(PROJECTS, function (i, p) {
            if (filter !== "all" && $.inArray(filter, p.filters) === -1) return;
            var tags = $.map(p.tags, function (t) { return '<span class="tag">' + t + "</span>"; }).join("");
            var featured = p.featured && filter === "all";
            html +=
                '<article class="project-card' + (featured ? " featured" : "") + '" data-num="' + p.num + '" style="animation-delay:' + (shown * 0.08) + 's">' +
                    '<div class="project-top">' +
                        '<span class="project-badge' + (p.freelance ? " freelance" : "") + '">' + (featured ? "Featured" : p.freelance ? "Freelance" : "Company project") + '</span>' +
                        '<span class="project-role mono">' + p.role + '</span>' +
                    '</div>' +
                    '<div class="project-cat">' + p.num + ' — ' + p.category + '</div>' +
                    '<h3 class="project-title">' + p.title + '</h3>' +
                    '<p class="project-desc">' + p.desc + '</p>' +
                    (p.highlight ? '<div class="project-highlight">' + p.highlight + '</div>' : "") +
                    '<div class="tags">' + tags + '</div>' +
                    '<div class="project-actions">' +
                        '<a href="#" class="project-link" data-index="' + i + '">View case study →</a>' +
                    '</div>' +
                '</article>';
            shown++;
        });
        $("#projectsList").html(html || '<p class="section-desc">No projects in this category yet.</p>');
    }
    renderProjects("all");

    $("#projectFilters").on("click", ".filter-btn", function () {
        $("#projectFilters .filter-btn").removeClass("active");
        $(this).addClass("active");
        renderProjects($(this).data("filter"));
    });

    $("#projectsList").on("click", ".project-link", function (e) {
        e.preventDefault();
        var p = PROJECTS[$(this).data("index")];
        var tags = $.map(p.tags, function (t) { return '<span class="tag">' + t + "</span>"; }).join("");
        var impact = $.map(p.impact, function (x) { return "<li>" + x + "</li>"; }).join("");
        openModal(
            '<div class="modal-label">' + p.num + ' — ' + p.category + '</div>' +
            '<h3 class="modal-title">' + p.title + '</h3>' +
            '<p class="modal-text">' + p.desc + '</p>' +
            '<div class="modal-sub">My role</div><p class="modal-text">' + p.role + '</p>' +
            '<div class="modal-sub">The challenge</div><p class="modal-text">' + p.challenge + '</p>' +
            '<div class="modal-sub">The solution</div><p class="modal-text">' + p.solution + '</p>' +
            '<div class="modal-sub">Impact</div><ul class="modal-list">' + impact + '</ul>' +
            '<div class="modal-sub">Tech stack</div><div class="tags" style="margin:0">' + tags + '</div>'
        );
    });

    /* ---------- Experience timeline ---------- */
    $("#timeline").html($.map(EXPERIENCE, function (x, i) {
        var points = $.map(x.points, function (p) { return "<li>" + p + "</li>"; }).join("");
        var tech = $.map(x.tech, function (t) { return '<span class="tag">' + t + "</span>"; }).join("");
        return '<div class="tl-item reveal' + (x.current ? " current" : "") + '">' +
                '<div class="tl-num">' + ("0" + (i + 1)).slice(-2) + '</div>' +
                '<div class="tl-card">' +
                    '<div class="tl-head">' +
                        '<div>' +
                            '<h3 class="tl-role">' + x.role + (x.current ? ' <span class="tl-present">Present</span>' : "") + '</h3>' +
                            '<div class="tl-company">' + x.company + '<span>•</span>' + x.location + '</div>' +
                        '</div>' +
                        '<div class="tl-period"><strong>' + x.period + '</strong><small>' + x.duration + '</small></div>' +
                    '</div>' +
                    '<div class="tl-highlight">' + x.highlight + '</div>' +
                    '<ul class="tl-points">' + points + '</ul>' +
                    '<div class="tl-tech"><span>Tech:</span>' + tech + '</div>' +
                '</div>' +
            '</div>';
    }).join(""));

    $("#educationList").html($.map(EDUCATION, function (e) {
        return '<div class="edu-card reveal">' +
                   '<div class="edu-icon"><i class="fa-solid fa-graduation-cap"></i></div>' +
                   '<div class="edu-body">' +
                       '<h3 class="edu-degree">' + e.degree + '</h3>' +
                       '<div class="tl-company">' + e.school + '<span>•</span>' + e.location + '</div>' +
                   '</div>' +
                   '<div class="tl-period"><strong>' + e.period + '</strong></div>' +
               '</div>';
    }).join(""));

    $("#achievementsList").html($.map(ACHIEVEMENTS, function (a) {
        return '<div class="edu-card achievement-card reveal">' +
                   '<div class="edu-icon"><i class="' + a.icon + '"></i></div>' +
                   '<div class="edu-body">' +
                       '<h3 class="edu-degree">' + a.title + '</h3>' +
                       '<div class="tl-company">' + a.desc + '</div>' +
                   '</div>' +
               '</div>';
    }).join(""));

    /* ---------- Contact form ---------- */
    var $name = $("#cName"), $email = $("#cEmail"), $msg = $("#cMessage");

    $msg.on("input", function () {
        $("#msgCount").text($(this).val().length + " / 1000 chars (min 10)");
    });

    $("#contactForm input, #contactForm textarea").on("input", function () {
        $(this).closest(".form-group").removeClass("error").find(".form-error").text("");
    });

    function setError($field, message) {
        $field.closest(".form-group").addClass("error").find(".form-error").text(message);
        return false;
    }

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        var valid = true;
        var name = $.trim($name.val()), email = $.trim($email.val()), message = $.trim($msg.val());

        if (name.length < 2 || name.length > 50) valid = setError($name, "Name must be 2-50 characters.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) valid = setError($email, "Please enter a valid email address.");
        if (message.length < 10) valid = setError($msg, "Message must be at least 10 characters.");

        if (!valid) { showToast("Please fix the highlighted fields", "error"); return; }

        var type = $("#inquiryTypes input:checked").val();
        var typeLabels = { freelance: "Freelance Project", job: "Full-Time Job", contract: "Contract Role" };
        var details = ["Inquiry type: " + typeLabels[type]];

        if (type === "freelance") {
            if ($("#cTimeline").val()) details.push("Timeline: " + $("#cTimeline").val());
        } else {
            if ($.trim($("#cCompany").val())) details.push("Company: " + $.trim($("#cCompany").val()));
            if ($.trim($("#cRole").val())) details.push("Role: " + $.trim($("#cRole").val()));
        }

        var subject = "[" + typeLabels[type] + "] Portfolio inquiry from " + name;
        var body = details.join("\n") + "\n\n" + message + "\n\n— " + name + " (" + email + ")";
        window.location.href = "mailto:" + PROFILE.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        showToast("✔ Opening your mail app — thank you, " + name + "!", "success");
        this.reset();
        toggleInquiryFields("freelance");
        $("#msgCount").text("0 / 1000 chars (min 10)");
    });

    /* ---------- Modal ---------- */
    function openModal(html) {
        $("#modalContent").html(html);
        $("#modal").addClass("open");
        $body.addClass("no-scroll");
    }
    function closeModal() {
        $("#modal").removeClass("open");
        if (!$("#menuOverlay").hasClass("open")) $body.removeClass("no-scroll");
    }
    $("#modalClose, .modal-backdrop").on("click", closeModal);
    $(document).on("keydown", function (e) {
        if (e.key === "Escape") { closeModal(); closeMenu(); }
    });

    /* ---------- Toast ---------- */
    var toastTimer;
    function showToast(text, type) {
        clearTimeout(toastTimer);
        $("#toast").removeClass("success error").addClass(type || "").text(text).addClass("show");
        toastTimer = setTimeout(function () { $("#toast").removeClass("show"); }, 3200);
    }

    /* ---------- Smooth anchor scroll ---------- */
    function scrollToEl(target) {
        var $t = $(target);
        if (!$t.length) return;
        $("html, body").stop().animate({ scrollTop: $t.offset().top - $navbar.outerHeight() + 1 }, 700);
    }
    $(document).on("click", 'a[href^="#"]', function (e) {
        var href = $(this).attr("href");
        if (href.length > 1 && $(href).length) {
            e.preventDefault();
            scrollToEl(href);
        }
    });

    /* ---------- Helpers ---------- */
    function expLabel(years) {
        return /^[\d<]/.test(years) ? years + " yrs" : years;
    }

    onScroll();
});
