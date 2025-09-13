/*<mode Code Start*/
    const btn = document.getElementById("toggleMode");
    const html = document.documentElement;

    // استرجاع الوضع من التخزين المحلي
    if (localStorage.getItem("theme")) {
      html.setAttribute("data-bs-theme", localStorage.getItem("theme"));
      btn.textContent = localStorage.getItem("theme") === "light" ? "🌙" : "☀️";
    }

    btn.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      html.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      // تغيير الأيقونة حسب الوضع
      btn.textContent = newTheme === "light" ? "🌙" : "☀️";
    });
/*<mode Code End*/

    /*Sweet Alert in Contact Section*/
  document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById('contactForm');

  if(contactForm){ // حماية إضافية
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      Swal.fire({
        title: "هل أنت متأكد من الأمور التي تريد ارسالها؟",
        text: "لن تتمكن من التراجع عن ذلك !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم أرسل الرسالة",
        cancelButtonText : "إلغاء"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "تم الإرسال",
            text: "تم ارسال رسالتك بنجاح",
            icon: "success"
          });
        }
      });
    });
  }
});
    /*Sweet Alert in Contact Section End*/


    /*Sign Section Start*/

const sectionContent = document.getElementById('sectionContent');

// نربط الأزرار بالأحداث
document.querySelectorAll('.section-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.getAttribute('data-section'); // نجيب اسم القسم
    loadSection(section);
    console.log(section);
  });
});
function loadSection(section){
  if(section === 'helper'){
    sectionContent.innerHTML = `
     <div class="grid">
      <!-- نموذج عنصر واحد -->
      
      <div class="sign">
        <p><span>و-1</span></p>
        <img src="./assets/images/Help Sign/134.jpg" alt="حاجز قبل ملتقى سكة حديد :
إذا كان الحاجز في حالة نزول أو في وضع أفقي ، فعلى عابر الطريق التوقف قبله">
        <p>حاجز قبل ملتقى سكة حديد :
إذا كان الحاجز في حالة نزول أو في وضع أفقي ، فعلى عابر الطريق التوقف قبله</p>
        
      </div>
      <div class="sign">
        <p><span>و-2</span></p>
        <img src="./assets/images/Help Sign/135.jpg" alt="حاجز قبل مكان عمل أو لسد طريق من قِبل سلطة مخولة : الطريق مسدودة ، إذا لم يتم سد الطريق على عرضها ، فيجوز لعابر الطريق تجاوز الحاجز والاستمرار بحذر على طول مكان العمل، إذا تم سد كل الطريق ، فيجوز لعابر الطريق التقدم فقط بالاتجاه الذي يتم توجيهه إليه بواسطة شاخصة مناسبة .">
        <p>حاجز قبل مكان عمل أو لسد طريق من قِبل سلطة مخولة : الطريق مسدودة ، إذا لم يتم سد الطريق على عرضها ، فيجوز لعابر الطريق تجاوز الحاجز والاستمرار بحذر على طول مكان العمل، إذا تم سد كل الطريق ، فيجوز لعابر الطريق التقدم فقط بالاتجاه الذي يتم توجيهه إليه بواسطة شاخصة مناسبة .</p>
        
      </div>
      <div class="sign">
        <p><span>و-3</span></p>
        <img src="./assets/images/Help Sign/136.jpg" alt="أحجار الحافة مدهونة باللون الأسود والأبيض : لإظهار وإبراز الحافات أو الفواصل أو الجزر المبنية">
        <p>أحجار الحافة مدهونة باللون الأسود والأبيض : لإظهار وإبراز الحافات أو الفواصل أو الجزر المبنية</p>
        
      </div>
      <div class="sign">
        <p><span>و-7</span></p>
        <img src="./assets/images/Help Sign/137.jpg" alt="أزرار مع أو بدون عاكس ضوء لإظهار وإبراز ترتيبات السير أو وسم في الطريق وحسب لون الوسم">
        <p>أزرار مع أو بدون عاكس ضوء لإظهار وإبراز ترتيبات السير أو وسم في الطريق وحسب لون الوسم</p>
        
      </div>
        <div class="sign">
        <p><span>و-8</span></p>
        <img src="./assets/images/Help Sign/138.jpg" alt="حاجز لوقاية المارة : بإغلاق مساحة الشارع أمام المشاة ، لا يجوز للماشي دخول مساحة الطريق التي يسدها الحاجز">
        <p>حاجز لوقاية المارة : بإغلاق مساحة الشارع أمام المشاة ، لا يجوز للماشي دخول مساحة الطريق التي يسدها الحاجز</p>
        
      </div>
      <div class="sign">
        <p><span>و-9</span></p>
        <img src="./assets/images/Help Sign/139.jpg" alt="شاخصة تحذير وإرشاد في ملتقى تفرع طرق: على سائق المركبة أن يتمهل بالسير ويتابع سيره بالاتجاهات الموسومة باسهم على الشاخصة . في الأمكنة التي تنفذ فيها أشغال على الطريق تكون الألوان برتقالي - ابيض.">
        <p>شاخصة تحذير وإرشاد في ملتقى تفرع طرق: على سائق المركبة أن يتمهل بالسير ويتابع سيره بالاتجاهات الموسومة باسهم على الشاخصة . في الأمكنة التي تنفذ فيها أشغال على الطريق تكون الألوان برتقالي - ابيض.</p>
        
      </div>
        <div class="sign">
        <p><span>و-10</span></p>
        <img src="./assets/images/Help Sign/140.jpg" alt="">
        <p>شاخصة تحذير وإرشاد في منعطف حاد : على سائق المركبة أن يتمهل بالسير ويتابع سيره بالاتجاه الموسوم باسهم على الشاخصة. في الأمكنة التي تنفذ فيها أشغال على الطريق تكون الألوان برتقالي - ابيض.</p>
        
      </div>
      </div>
    `;
  } else {
    sectionContent.innerHTML = `<h3 class="text-center text-muted">المحتوى لهذا القسم قيد الإنشاء</h3>`;
  }
}

    /*Sign Section End*/ 