const projectData = {
  souq: {
    title: "منصة سوق كار (Souq Cars)",
    desc: "منصة إلكترونية متكاملة لعرض وبيع وشراء السيارات، مصممة بواجهة بحث وتصفية منظمة ولوحة إدارة لإضافة المركبات وتفاصيلها التقنية.",
    image: "assets/images/souq-cars.webp",
    url: "https://souq-cars.onrender.com/"
  },
  orium: {
    title: "منصة أوريوم (Orium)",
    desc: "منصة تجارة إلكترونية متعددة البائعين تدعم تعدد العملات، وتوفر تجربة متجر متكاملة لإدارة المنتجات واستقبال الطلبات بمرونة.",
    image: "assets/images/orium.webp",
    url: "https://orium.free.je/"
  }
};

// نافذة معاينة المشروع
const projectModal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDesc");
const modalLiveLink = document.getElementById("modalLiveLink");

function openProjectModal(projectKey) {
  const item = projectData[projectKey];
  if (!item) return;

  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalLiveLink.href = item.url;

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
}

function closeProjectModal() {
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".js-open-modal").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openProjectModal(trigger.getAttribute("data-project"));
  });
  trigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProjectModal(trigger.getAttribute("data-project"));
    }
  });
});

modalCloseBtn.addEventListener("click", closeProjectModal);
modalBackdrop.addEventListener("click", closeProjectModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// توليد وتنزيل السيرة الذاتية كـ PDF
document.querySelectorAll(".js-download-cv").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.print();
  });
});