/*<mode Code Start*/    

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
              confirmButtonColor: "#198754", // اللون الأخضر
            icon: "success"
          });
        }
      });
    });
  }
});
    /*Sweet Alert in Contact Section End*/


    /*Sign Section Start*/
// نربط الأزرار بالأحداث
//console.log(document.querySelectorAll('.section-btn'));
const sectionContent = document.querySelector("#sectionContent");
document.querySelectorAll('.section-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.getAttribute('data-section'); // نجيب اسم القسم
    loadSection(section);
    
  });
});
function loadSection(section){
  if(section === 'warning'){
    sectionContent.innerHTML = `
  <div class="container text-center my-5" id ="warning">
  <h2 class="mb-4">  شاخصات (إشارات) التحذير</h2>
  <div class="row g-4">

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-1</span></p>
        <img src="assets/images/Warning/1.jpg" alt="طريق وعرة أو مشوشة">
        <p>طريق وعرة أو مشوشة</p>
        
        </div>
      </div>
    </div>

 <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-2</span></p>
       <img src="assets/images/Warning/2.jpg" alt="انعطاف حاد إلى اليسار">
        <p>انعطاف حاد إلى اليسار</p>
        </div>
      </div>
    </div>


    
 <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-3</span></p>
        <img src="assets/images/Warning/3.jpg" alt="انعطاف حاد إلى اليمين">
        <p>انعطاف حاد إلى اليمين</p>
        </div>
      </div>
    </div>



    
 <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>أ-5</span></p>
        <img src="assets/images/Warning/4.jpg" alt="انعطاف شديد الالتواء نحو اليمين">
        <p>انعطاف شديد الالتواء نحو اليمين</p>
        </div>
      </div>
    </div>


    
 <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-7</span></p>
        <img src="assets/images/Warning/5.jpg" alt="انعطاف إلى اليمين وثم إلى اليسار	">
        <p>انعطاف إلى اليمين وثم إلى اليسار	</p>
        </div>
      </div>
    </div>


    
 <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>أ-8</span></p>
        <img src="assets/images/Warning/6.jpg" alt="طريق ملتوية">
        <p>طريق ملتوية</p>
        </div>
      </div>
    </div>


    
 <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-9</span></p>
        <img src="assets/images/Warning/7.jpg" alt="الطريق آخذة في الضيق">
        <p>الطريق آخذة في الضيق</p>
        </div>
      </div>
    </div>



     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-10</span></p>
        <img src="assets/images/Warning/8.jpg" alt="جسر ضيق">
        <p>جسر ضيق</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-11</span></p>
        <img src="assets/images/Warning/9.jpg" alt="أشغال على الطريق">
        <p>أشغال على الطريق</p>
        </div>
      </div>
    </div>



    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-12</span></p>
        <img src="assets/images/Warning/10.jpg" alt="مفترق تقاطع طرق	">
        <p>مفترق تقاطع طرق</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-14</span></p>
        <img src="assets/images/Warning/11.jpg" alt="مفترق تفرع طرق إلى اليمين	">
        <p>مفترق تفرع طرق إلى اليمين	</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-15</span></p>
        <img src="assets/images/Warning/12.jpg" alt="مفترق تفرع طرق إلى اليمين والى اليسار">
        <p>مفترق تفرع طرق إلى اليمين والى اليسار</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-17</span></p>
        <img src="assets/images/Warning/13.jpg" alt=" مفترق تفرعات: نحو اليمين وثم نحو اليسار	">
        <p>مفترق تفرعات: نحو اليمين وثم نحو اليسار	</p>
        </div>
      </div>
    </div>



    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-18</span></p>
        <img src="assets/images/Warning/14.jpg" alt=" حركة سير دائرية على بعد 50-150 متر">
        <p>حركة سير دائرية على بعد 50-150 متر	</p>
        </div>
      </div>
    </div>



    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-19</span></p>
        <img src="assets/images/Warning/15.jpg" alt=" آلة ضوئية على بعد 50-150 متر">
        <p>آلة ضوئية على بعد 50-150 متر</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-20</span></p>
        <img src="assets/images/Warning/16.jpg" alt=" اندماج شارع فيه حق الأولوية مع طريق جانبية من اليمين
(ممنوع الاستدارة إلى الطريق الجانبية)">
        <p> اندماج شارع فيه حق الأولوية مع طريق جانبية من اليمين
(ممنوع الاستدارة إلى الطريق الجانبية)</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-22</span></p>
        <img src="assets/images/Warning/17.jpg" alt=" اندماج مع شارع فيه حق الأولوية
(ممنوع الاستدارة إلى اليسار)">
        <p> اندماج مع شارع فيه حق الأولوية
(ممنوع الاستدارة إلى اليسار)</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-24</span></p>
        <img src="assets/images/Warning/18.jpg" alt=" اكتظاظ في حركة السير أمامك">
        <p> اكتظاظ في حركة السير أمامك</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-25</span></p>
        <img src="assets/images/Warning/19.jpg" alt=" ملتقى سكة حديد	">
        <p> ملتقى سكة حديد	</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-28</span></p>
        <img src="assets/images/Warning/20.jpg" alt=" الاقتراب من ملتقى سكة حديد على بعد 250م	">
        <p>الاقتراب من ملتقى سكة حديد على بعد 250م	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <p><span>أ-29</span></p>
        <img src="assets/images/Warning/21.jpg" alt="الاقتراب من ملتقى سكة حديد على بعد 170م">
        <p>  الاقتراب من ملتقى سكة حديد على بعد 170م	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-30</span></p>
        <img src="assets/images/Warning/22.jpg" alt="الاقتراب من ملتقى سكة حديد على بعد 100م">
        <p>الاقتراب من ملتقى سكة حديد على بعد 100م</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <p><span>أ-32</span></p>
        <img src="assets/images/Warning/23.jpg" alt="مكان ملتقى سكة حديد - أكثر من خط واحد على بعد 10م	">
        <p>مكان ملتقى سكة حديد - أكثر من خط واحد على بعد 10م	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-33</span></p>
        <img src="assets/images/Warning/24.jpg" alt="أمامك إشارة"قف>
        <p>أمامك إشارة قف</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-34</span></p>
        <img src="assets/images/Warning/25.jpg" alt="منحدر خطر
(مع ذكر نسبة الانحدار أو بدونها)">
        <p>منحدر خطر
(مع ذكر نسبة الانحدار أو بدونها)</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-35</span></p>
        <img src="assets/images/Warning/26.jpg" alt="  خطر التزحلق		">
        <p>   خطر التزحلق		</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-36</span></p>
        <img src="assets/images/Warning/27.jpg" alt=" أمامك ممر للمشاة	">
        <p>  أمامك ممر للمشاة	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-37</span></p>
        <img src="assets/images/Warning/28.jpg" alt=" مشاة بالقرب من المكان		">
        <p>  مشاة بالقرب من المكان		</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-38</span></p>
        <img src="assets/images/Warning/29.jpg" alt=" أمامك حركة سير بالاتجاهين
(توضع على بداية المقطع)">
        <p> أمامك حركة سير بالاتجاهين
(توضع على بداية المقطع)	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-39</span></p>
        <img src="assets/images/Warning/30.jpg" alt=" ضوضاء طائرات على ارتفاع منخفض	">
        <p>   ضوضاء طائرات على ارتفاع منخفض	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-40</span></p>
        <img src="assets/images/Warning/31.jpg" alt=" مكان خطر لم تُحدد له شاخصة خاصة
(يُذكر نوع الخطر على الشاخصة أ-43)	">
        <p> مكان خطر لم تُحدد له شاخصة خاصة
(يُذكر نوع الخطر على الشاخصة أ-43)</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-34</span></p>
        <img src="assets/images/Warning/32.jpg" alt=" شاخصة للتحذير والإرشاد والمنع- للإعلام		">
        <p> شاخصة للتحذير والإرشاد والمنع- للإعلام	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>أ-46</span></p>
        <img src="assets/images/Warning/33.jpg" alt=" مطبات أمامك	">
        <p>  مطبات أمامك	</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>أ-40</span></p>
        <img src="assets/images/Warning/34.jpg" alt=" مركبة زراعية تقطع الطريق">
        <p> مركبة زراعية تقطع الطريق	</p>
        </div>
      </div>
    </div>














  </div>
</div>




    `;
  }else if(section === 'guidance'){
    sectionContent.innerHTML = `
  <div class="container text-center my-5" id ="guidance">
  <h2 class="mb-4">  شاخصات (إشارات)الإرشاد</h2>
  <div class="row g-4">

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-1</span></p>
        <img src="assets/images/guidance/35.jpg" alt="مغلق أمام جميع المركبات بما في ذلك عربات اليد (من كلا الاتجاهين)	">
        <p>مغلق أمام جميع المركبات بما في ذلك عربات اليد (من كلا الاتجاهين)	</p>
        
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-2</span></p>
        <img src="assets/images/guidance/36.jpg" alt="مغلق أمام جميع المركبات بما في ذلك عربات اليد (شارع باتجاه واحد)	">
        <p>مغلق أمام جميع المركبات بما في ذلك عربات اليد (شارع باتجاه واحد)	</p>
        
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-3</span></p>
        <img src="assets/images/guidance/37.jpg" alt="ممنوع الاستدارة نحو اليسار">
        <p>ممنوع الاستدارة نحو اليسار</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-6</span></p>
        <img src="assets/images/guidance/38.jpg" alt="ممنوع الاستدارة إلى اليسار للسير في الاتجاه المعاكس	">
        <p>ممنوع الاستدارة إلى اليسار للسير في الاتجاه المعاكس	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-7</span></p>
        <img src="assets/images/guidance/39.jpg" alt="أعط حق الأولوية في الطريق الضيقة لحركة السير المقابلة	">
        <p>أعط حق الأولوية في الطريق الضيقة لحركة السير المقابلة	</p>
        
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-8</span></p>
        <img src="assets/images/guidance/40.jpg" alt="ممنوع التجاوز أو العبور عن مركبة ميكانيكية تسير على أكثر من عجلتين في نفس اتجاه السير">
        <p> ممنوع التجاوز أو العبور عن مركبة ميكانيكية تسير على أكثر من عجلتين في نفس اتجاه السير</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-9</span></p>
        <img src="assets/images/guidance/41.jpg" alt="نهاية مقطع الطريق الذي يسري عليه قيد التجاوز	">
        <p> نهاية مقطع الطريق الذي يسري عليه قيد التجاوز	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-10</span></p>
        <img src="assets/images/guidance/42.jpg" alt="لا يجوز لمركبة تجارية يزيد وزنها الإجمالي المسموح به عن 4 أطنان أن تتجاوز أو أن تمر عن مركبة ميكانيكية تسير على اكثر من عجلتين	">
        <p>لا يجوز لمركبة تجارية يزيد وزنها الإجمالي المسموح به عن 4 أطنان أن تتجاوز أو أن تمر عن مركبة ميكانيكية تسير على اكثر من عجلتين	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-11</span></p>
        <img src="assets/images/guidance/43.jpg" alt="نهاية مقطع الطريق الذي يسري عليه قيد التجاوز">
        <p>نهاية مقطع الطريق الذي يسري عليه قيد التجاوز</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-12</span></p>
        <img src="assets/images/guidance/44.jpg" alt="ممنوع دخول المركبات الميكانيكية باستثناء الدراجة النارية بدون عربة جانبية	">
        <p>ممنوع دخول المركبات الميكانيكية باستثناء الدراجة النارية بدون عربة جانبية	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-13</span></p>
        <img src="assets/images/guidance/45.jpg" alt="ممنوع دخول الدراجات النارية	">
        <p>ممنوع دخول الدراجات النارية	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-14</span></p>
        <img src="assets/images/guidance/46.jpg" alt="ممنوع الدخول جميع المركبات الميكانيكية">
        <p>ممنوع الدخول جميع المركبات الميكانيكية</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-15</span></p>
        <img src="assets/images/guidance/47.jpg" alt="ممنوع دخول المركبات الميكانيكية التجارية التي يزيد وزنها الإجمالي المسموح به عما هو مسجل في الشاخصة	">
        <p>ممنوع دخول المركبات الميكانيكية التجارية التي يزيد وزنها الإجمالي المسموح به عما هو مسجل في الشاخصة	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-16</span></p>
        <img src="assets/images/guidance/48.jpg" alt="ممنوع دخول جميع المركبات التي يزيد وزنها الإجمالي المسموح به عما هو مسجل في الشاخصة	">
        <p>ممنوع دخول جميع المركبات التي يزيد وزنها الإجمالي المسموح به عما هو مسجل في الشاخصة	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-17</span></p>
        <img src="assets/images/guidance/49.jpg" alt="ممنوع دخول مركبة وحمولتها والتي يزيد عرضها عما هو مسجل في الشاخصة">
        <p>ممنوع دخول مركبة وحمولتها والتي يزيد عرضها عما هو مسجل في الشاخصة</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-18</span></p>
        <img src="assets/images/guidance/50.jpg" alt="ممنوع دخول مركبة وحمولتها والتي يزيد ارتفاعها عما هو مسجل في الشاخصة	">
        <p>ممنوع دخول مركبة وحمولتها والتي يزيد ارتفاعها عما هو مسجل في الشاخصة	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-20</span></p>
        <img src="assets/images/guidance/51.jpg" alt="سرعة خاصة : ممنوع السير بسرعة تزيد عن عدد الكم/ساعة المسجل في الشاخصة	">
        <p>سرعة خاصة : ممنوع السير بسرعة تزيد عن عدد الكم/ساعة المسجل في الشاخصة	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-21</span></p>
        <img src="assets/images/guidance/52.jpg" alt="نهاية المقطع الذي فيه السرعة الخاصة">
        <p>نهاية المقطع الذي فيه السرعة الخاصة</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-24</span></p>
        <img src="assets/images/guidance/53.jpg" alt="الدخول إلى طريق أو طرق بلدية	">
        <p>الدخول إلى طريق أو طرق بلدية	</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-25</span></p>
        <img src="assets/images/guidance/54.jpg" alt="نهاية الطريق أو الطرق البلدية	">
        <p>نهاية الطريق أو الطرق البلدية</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-28</span></p>
        <img src="assets/images/guidance/55.jpg" alt="ممنوع وقوف مركبة في الطريق في الجهة التي أُقيمت فيها الشاخصة">
        <p>ممنوع وقوف مركبة في الطريق في الجهة التي أُقيمت فيها الشاخصة</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-29</span></p>
        <img src="assets/images/guidance/56.jpg" alt="ممنوع الوقوف والتوقف في الطريق في الجهة التي أُقيمت فيها الشاخصة إلا لتنفيذ أمر قانوني	">
        <p>ممنوع الوقوف والتوقف في الطريق في الجهة التي أُقيمت فيها الشاخصة إلا لتنفيذ أمر قانوني	</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-30</span></p>
        <img src="assets/images/guidance/57.jpg" alt="ممنوع وقوف مركبة تجارية يزيد وزنها الإجمالي المسموح به عن 10000كغم في المنطقة التي أُقيمت في بدايتها الشاخصة	">
        <p>ممنوع وقوف مركبة تجارية يزيد وزنها الإجمالي المسموح به عن 10000كغم في المنطقة التي أُقيمت في بدايتها الشاخصة	</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-31</span></p>
        <img src="assets/images/guidance/58.jpg" alt="نهاية المنطقة التي يُمنع فيها وقوف مركبة تجارية يزيد وزنها الإجمالي المسموح به عن 10000كغم">
        <p>نهاية المنطقة التي يُمنع فيها وقوف مركبة تجارية يزيد وزنها الإجمالي المسموح به عن 10000كغم</p>
      
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>ب-32</span></p>
        <img src="assets/images/guidance/59.jpg" alt="نهاية المنطقة التي يُمنع فيها الوقوف أو التوقف
(إلغاء الشاخصتين رقم : ب-28 و ب-29)	">
        <p> نهاية المنطقة التي يُمنع فيها الوقوف أو التوقف
(إلغاء الشاخصتين رقم : ب-28 و ب-29)	</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-33</span></p>
        <img src="assets/images/guidance/60.jpg" alt="الدخول إلى منطقة يحظر فيها دخول مركبة تعليم السواقة أثناء التعليم ما عدا الباص	">
        <p>الدخول إلى منطقة يحظر فيها دخول مركبة تعليم السواقة أثناء التعليم ما عدا الباص	</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-34</span></p>
        <img src="assets/images/guidance/61.jpg" alt="نهاية المنطقة التي يحظر فيها دخول مركبة تعليم السواقة أثناء التعليم">
        <p>نهاية المنطقة التي يحظر فيها دخول مركبة تعليم السواقة أثناء التعليم</p>
      
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-35</span></p>
        <img src="assets/images/guidance/62.jpg" alt="يجوز السفر في الشارع أو في المسلك للقطار الخفيف وللباص والصالون العمومي وللمركبات التي تنقل على الأقل عدد الركاب المذكور في الشاخصة	">
        <p>يجوز السفر في الشارع أو في المسلك للقطار الخفيف وللباص والصالون العمومي وللمركبات التي تنقل على الأقل عدد الركاب المذكور في الشاخصة	</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-36</span></p>
        <img src="assets/images/guidance/63.jpg" alt="أعطِ حق الأولوية لحركة السير في الطريق القاطعة أمامك	">
        <p>أعطِ حق الأولوية لحركة السير في الطريق القاطعة أمامك	</p>
      
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-37</span></p>
      <img src="assets/images/guidance/64.jpg" alt="قف !
       وأعطِ حق الأولوية لحركة السير في الطريق القاطعة أمامك">
        <p>قف !
وأعطِ حق الأولوية لحركة السير في الطريق القاطعة أمامك</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-38</span></p>
        <img src="assets/images/guidance/65.jpg" alt="قف !
(شاخصة متنقلة)">
        <p>قف !
(شاخصة متنقلة)</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>ب-39</span></p>
        <img src="assets/images/guidance/66.jpg" alt="تقدم بحذر
(شاخصة متنقلة)">
        <p>تقدم بحذر
(شاخصة متنقلة)</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-41</span></p>
        <img src="assets/images/guidance/67.jpg" alt="سر إلى اليسار من أمام الشاخصة
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط">
        <p>سر إلى اليسار من أمام الشاخصة
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط</p>
     
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-43</span></p>
        <img src="assets/images/guidance/68.jpg" alt="سر إلى اليسار من خلف الشاخصة
اذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط">
        <p>سر إلى اليسار من خلف الشاخصة
اذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-44</span></p>
        <img src="assets/images/guidance/69.jpg" alt="سر إلى الأمام (إذا كان السهم مائلاً فسر باتجاه السهم)
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط">
        <p>سر إلى الأمام (إذا كان السهم مائلاً فسر باتجاه السهم)
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط</p>
      
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-46</span></p>
        <img src="assets/images/guidance/70.jpg" alt="سر إلى اليسار أو إلى الأمام
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط">
        <p>سر إلى اليسار أو إلى الأمام
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-47</span></p>
        <img src="assets/images/guidance/71.jpg" alt="سر إلى اليمين أو إلى اليسار
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط">
        <p>سر إلى اليمين أو إلى اليسار
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-48</span></p>
        <img src="assets/images/guidance/72.jpg" alt="أعطِ حق الأولوية لحركة السير القاطعة طريقك والتي تسير حول الدوار واعبر الدوار من جانبه الأيمن">
        <p>أعطِ حق الأولوية لحركة السير القاطعة طريقك والتي تسير حول الدوار واعبر الدوار من جانبه الأيمن</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-49</span></p>
        <img src="assets/images/guidance/73.jpg" alt="يجوز عبور المكان الموسوم بهذه الشاخصة من اليمين أو من اليسار
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط">
        <p>يجوز عبور المكان الموسوم بهذه الشاخصة من اليمين أو من اليسار
إذا كان السهم باللون الأصفر يدل على اتجاه السير للمواصلات العمومية فقط</p>
     
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-51</span></p>
        <img src="assets/images/guidance/74.jpg" alt="اعبر المكان الموسوم بالشاخصة من جانبه الأيسر">
        <p>اعبر المكان الموسوم بالشاخصة من جانبه الأيسر</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-52</span></p>
        <img src="assets/images/guidance/75.jpg" alt="طريق للمركبات الميكانيكية فقط	">
        <p>طريق للمركبات الميكانيكية فقط	</p>
        </div>
      </div>
    </div>


     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-53</span></p>
        <img src="assets/images/guidance/76.jpg" alt="طريق للمركبات الميكانيكية التي تستطيع ويجوز لها السير بسرعة لا تقل عن ما هو مسجل في الشاخصة بالكم/ساعة">
        <p>طريق للمركبات الميكانيكية التي تستطيع ويجوز لها السير بسرعة لا تقل عن ما هو مسجل في الشاخصة بالكم/ساعة</p>
        </div>
      </div>
    </div>



     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-54</span></p>
        <img src="assets/images/guidance/77.jpg" alt="الدخول إلى طريق سريعة : ممنوع دخول المشاة والدراجات الهوائية والمركبات البطيئة وعربات اليد والحيوانات ولكل مركبة لا تستطيع ولا يجوز لها السير بالسرعة المذكورة في الشاخصة ب-53">
        <p>الدخول إلى طريق سريعة : ممنوع دخول المشاة والدراجات الهوائية والمركبات البطيئة وعربات اليد والحيوانات ولكل مركبة لا تستطيع ولا يجوز لها السير بالسرعة المذكورة في الشاخصة ب-53</p>
        </div>
      </div>
    </div>

    

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-55</span></p>
        <img src="assets/images/guidance/78.jpg" alt="نهاية الطريق السريعة	">
        <p>نهاية الطريق السريعة	</p>
        </div>
      </div>
    </div>


    

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-57</span></p>
        <img src="assets/images/guidance/79.jpg" alt="مكان إنزال واصعاد الركاب للصالون العمومي بدون انتظار">
        <p>مكان إنزال واصعاد الركاب للصالون العمومي بدون انتظار</p>
        </div>
      </div>
    </div>


    

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-58</span></p>
        <img src="assets/images/guidance/80.jpg" alt="محطة صالون عمومي : ممنوع وقوف أو توقف أية مركبة أخرى باستثناء إنزال الركاب	">
        <p>محطة صالون عمومي : ممنوع وقوف أو توقف أية مركبة أخرى باستثناء إنزال الركاب	</p>
        </div>
      </div>
    </div>


    

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-59</span></p>
        <img src="assets/images/guidance/81.jpg" alt="نهاية منطقة محطة الصالون العمومي	">
        <p>نهاية منطقة محطة الصالون العمومي	</p>
        </div>
      </div>
    </div>


    

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-60</span></p>
        <img src="assets/images/guidance/82.jpg" alt="ممنوع دخول التراكتورات ومركبات العمل">
        <p>ممنوع دخول التراكتورات ومركبات العمل</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-61</span></p>
        <img src="assets/images/guidance/83.jpg" alt="ممنوع دخول الحيوانات أو العربات التي تجرها الحيوانات	">
        <p>ممنوع دخول الحيوانات أو العربات التي تجرها الحيوانات	</p>
      
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-62</span></p>
        <img src="assets/images/guidance/84.jpg" alt="ممنوع دخول الدراجات الهوائية	">
        <p>ممنوع دخول الدراجات الهوائية	</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-63</span></p>
        <img src="assets/images/guidance/85.jpg" alt="سبيل للدراجات الهوائية فقط">
        <p>سبيل للدراجات الهوائية فقط</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-63 أ</span></p>
        <img src="assets/images/guidance/86.jpg" alt="سبيل للدراجات الهوائية وللمشاة فقط	">
        <p>سبيل للدراجات الهوائية وللمشاة فقط	</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ب-63 ب	</span></p>
        <img src="assets/images/guidance/87.jpg" alt="سبيلان منفردان للدراجات الهوائية وللمشاة فقط	">
        <p>سبيلان منفردان للدراجات الهوائية وللمشاة فقط	</p>
      
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-64</span></p>
        <img src="assets/images/guidance/88.jpg" alt="ممنوع دخول المشاة بما في ذلك طرف الطريق">
        <p>ممنوع دخول المشاة بما في ذلك طرف الطريق</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
       <p><span>ب-65</span></p>
        <img src="assets/images/guidance/89.jpg" alt="سبيل للمشاة فقط	">
        <p>سبيل للمشاة فقط	</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ب-66</span></p>
        <img src="assets/images/guidance/90.jpg" alt="ممنوع دخول مركبة تنقل مواد خطرة والملزمة بوسم بموجب القانون">
        <p>ممنوع دخول مركبة تنقل مواد خطرة والملزمة بوسم بموجب القانون</p>
        </div>
      </div>
    </div>



  </div>
</div>

    `;
  }else if(section === 'information'){
    sectionContent.innerHTML = `
  <div class="container text-center my-5" id ="information">
  <h2 class="mb-4">  شاخصات (إشارات) الاستعلامات</h2>
  <div class="row g-4">

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>ج-1</span></p>
        <img src="assets/images/information/91.jpg" alt="موقف للمركبات ، وإذا ذُكر نوع من المركبات في اللافتة التي تحت الشاخصة فيكون الموقف للمركبات المذكورة فقط .">
        <p>موقف للمركبات ، وإذا ذُكر نوع من المركبات في اللافتة التي تحت الشاخصة فيكون الموقف للمركبات المذكورة فقط .</p>
      
        </div>
      </div>
    </div>

    

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>ج-4</span></p>
        <img src="assets/images/information/92.jpg" alt="طريق بدون مخرج">
        <p>طريق بدون مخرج</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>ج-5</span></p>
        <img src="assets/images/information/93.jpg" alt="لك حق الأولوية في الطريق الضيقة بالنسبة لحركة السير من الاتجاه المعاكس">
        <p>لك حق الأولوية في الطريق الضيقة بالنسبة لحركة السير من الاتجاه المعاكس</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>ج-6</span></p>
          <img src="assets/images/information/94.jpg" alt="الدخول إلى مقطع طريق فيها حركة السير باتجاه السهم فقط (طريق ذات اتجاه واحد) وحتى المفترق القريب أو لغاية الشاخصة أ-38">
        <p>الدخول إلى مقطع طريق فيها حركة السير باتجاه السهم فقط (طريق ذات اتجاه واحد) وحتى المفترق القريب أو لغاية الشاخصة أ-38</p>
        </div>
      </div>
    </div>




     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-6 أ</span></p>
        <img src="assets/images/information/95.jpg" alt="حركة السير باتجاه السهم الأبيض مسموحة لجميع المركبات ، أما المركبات التي سُمح له بالسير بموجب الشاخصة ب-35 فيجوز لها السير في الاتجاه المعاكس .">
        <p>حركة السير باتجاه السهم الأبيض مسموحة لجميع المركبات ، أما المركبات التي سُمح له بالسير بموجب الشاخصة ب-35 فيجوز لها السير في الاتجاه المعاكس .</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <p><span>ج-7</span></p>
        <img src="assets/images/information/96.jpg" alt="مكان عبور المشاة">
        <p>مكان عبور المشاة</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-28</span></p>
        <img src="assets/images/information/97.jpg" alt="لافتة إرشاد قبل المفترق : تُظهر شكل المفترق . سهم عريض : طريق رئيسية - سهم رفيع : طريق ثانوية .">
        <p>لافتة إرشاد قبل المفترق : تُظهر شكل المفترق . سهم عريض : طريق رئيسية - سهم رفيع : طريق ثانوية .</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-29</span></p>
        <img src="assets/images/information/98.jpg" alt="لافتة إرشاد قبل محول في طريق سريعة .">
        <p>لافتة إرشاد قبل محول في طريق سريعة .</p>
        </div>
      </div>
    </div>



    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
      <p><span>ج-38</span></p>
        <img src="assets/images/information/99.jpg" alt="مكان وقوف لمركبة معاق - مشلول الأرجل">
        <p>مكان وقوف لمركبة معاق - مشلول الأرجل</p>
        </div>
      </div>
    </div>



    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-39</span></p>
        <img src="assets/images/information/100.jpg" alt="عدد المسالك في الشارع آخذ في التزايد">
        <p>عدد المسالك في الشارع آخذ في التزايد</p>

        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-40</span></p>
        <img src="assets/images/information/101.jpg" alt="عدد المسالك في الشارع آخذ في التناقص">
        <p>عدد المسالك في الشارع آخذ في التناقص</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-44</span></p>
        <img src="assets/images/information/102.jpg" alt="يجوز الوقوف على الرصيف كما هو موسوم في الشاخصة، وذلك للمركبات الخصوصية والخصوصية المزدوجة الاستعمال والمركبات التجارية التي لا يزيد وزنها الإجمالي المسموح به عن 2200كغم">
        <p>يجوز الوقوف على الرصيف كما هو موسوم في الشاخصة، وذلك للمركبات الخصوصية والخصوصية المزدوجة الاستعمال والمركبات التجارية التي لا يزيد وزنها الإجمالي المسموح به عن 2200كغم</p>
        </div>
      </div>
    </div>


    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-45</span></p>
        <img src="assets/images/information/103.jpg" alt="شارع مختلط">
        <p>شارع مختلط</p>
        </div>
      </div>
    </div>

    
    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>ج-46</span></p>
        <img src="assets/images/information/104.jpg" alt="نهاية الشارع المختلط">
        <p>نهاية الشارع المختلط</p> 

        </div>
      </div>
    </div>











  </div>
</div>

    `;
  }else if(section === 'road'){
  sectionContent.innerHTML = `
  <div class="container text-center my-5" id ="road">
  <h2 class="mb-4">الشاخصات (الإشارات) المرسومة على سطح الطريق</h2>
  <div class="row g-4">

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-1</span></p>
        <img src="assets/images/Road/105.jpg" class="img-fluid mb-2" alt="">
       <p>خط متقطع : خط محور الشارع أو خط مسلك
      على من يسوق مركبة أو حيوان أن يسوق مركبته أو الحيوان في المسلك الأيمن الأقصى ولا يجوز له عبور الخط بجسم المركبة أو بقسمٍ منه إلا من اجل التجاوز أو من اجل تنفيذ أمرٍ قانوني</p>
        
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-2</span></p>
        <img src="assets/images/Road/106.jpg" class="img-fluid mb-2" alt="">
        <p>خطوط متقاطعة متوازية : خطوط مسلك في شارع ذو ثلاثة مسالك أو اكثر - على من يسوق مركبة أو حيوان أن يسوق مركبته أو الحيوان في المسلك الأيمن الأقصى ولا يجوز له عبور الخطوط بجسم المركبة أو بقسمٍ منه إلا من اجل التجاوز أو من اجل تنفيذ أمرٍ قانوني</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-3</span></p>
        <img src="assets/images/Road/107.jpg" class="img-fluid mb-2" alt="">
        <p>خط متقطع مزدوج باللون الأصفر ويُستعمل لوسم مسلك للمواصلات العمومية : يجوز السفر في المسلك للمركبات المذكورة في الشاخصة ب-35</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-4</span></p>
        <img src="assets/images/Road/108.jpg" class="img-fluid mb-2" alt="">
        <p>خط فاصل متواصل : إذا وُسم الشارع بخط فاصل متواصل فعلى السائق أن يسوق مركبته أو يقود الحيوان على الجانب الأيمن للخط ولا يجوز له عبور الخط بجسم المركبة أو بقسمٍ منه</p>
        </div>
      </div>
    </div>

    
     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-5</span></p>
        <img src="assets/images/Road/109.jpg" class="img-fluid mb-2" alt="">
        <p>خط متقطع متراص (خط توجيه) : يشير إلى ظهور خط فاصل متواصل ، على سائق المركبة التوجه بمركبته إلى المسلك الأيمن قبل بداية الخط الفاصل المتواصل</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-6</span></p>
        <img src="assets/images/Road/110.jpg" class="img-fluid mb-2" alt="">
        <p>خط متقطع بجانب خط فاصل متواصل : يجوز اختراق الخطوط إذا كان الخط المتقطع على يمين الخط الفاصل المتواصل وإذا كانت الطريق خالية .
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-7</span></p>
        <img src="assets/images/Road/111.jpg" class="img-fluid mb-2" alt="">
        <p>خط حدود : يشير الخط إلى حافة الشارع في المكان التي لا توجد فيه أحجار حافة . على سائق المركبة الميكانيكية أن يسوق مركبته على الجانب الأيسر للخط ولا يجوز له العبور إلى يمين الخط إلا من اجل منع وقوع حادث أو منع عرقلة لحركة السير</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-8</span></p>
        <img src="assets/images/Road/112.jpg" class="img-fluid mb-2" alt="">
        <p>خط توقف : مكان توقف المركبة أو الحيوان
        (قبل الخط وقريباً منه) عندما يكون هناك واجب التوقف .</p>
        </div>
      </div>
    </div>

      <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-9</span></p>
        <img src="assets/images/Road/113.jpg" class="img-fluid mb-2" alt="">
        <p>خط مستطيلات : يشير إلى تغيير وجهة المسلك وذلك للاستدارة إلى اليمين أو إلى اليسار فقط .</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-10</span></p>
        <img src="assets/images/Road/114.jpg" class="img-fluid mb-2" alt="">
        <p>مكان عبور للمشاة : إذا قُسِّم مكان العبور إلى قسمين ، فعلى الماشي أن يعبر من القسم الأيمن لمكان العبور .</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-12</span></p>
        <img src="assets/images/Road/115.jpg" class="img-fluid mb-2" alt="">
        <p>خطوط توجيه للاستدارة في المفترقات <br/>
        (خطوط متقطعة أو أزرار)</p>   
       </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-13</span></p>
        <img src="assets/images/Road/116.jpg" class="img-fluid mb-2" alt="">
           <p>أسهم للسير في المفترق
           يجوز عبور المفترق من المسلك الموسوم بالسهم فقط باتجاه السهم .</p>
       </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-14</span></p>
        <img src="assets/images/Road/117.jpg" class="img-fluid mb-2" alt="">
        <p>جزر سير (بأشكال مختلفة) ، موسومة على الشارع . لا يجوز لسائق المركبة أو الحيوان السير أو الوقوف عليها .</p>

       </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-15</span></p>
        <img src="assets/images/Road/118.jpg" class="img-fluid mb-2" alt="">
        <p>أحجار حافة مصبوغة باللون الأحمر والأبيض
        ممنوع التوقف أو الوقوف في الشارع إلا لتنفيذ أمر قانوني </p>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-16</span></p>
        <img src="assets/images/Road/119.jpg" class="img-fluid mb-2" alt="">
        <p>مكان ممنوع الوقوف عليه : ممنوع الوقوف داخل المساحة الموسومة على سطح الشارع.</p>
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-17</span></p>
        <img src="assets/images/Road/120.jpg" class="img-fluid mb-2" alt="">
        <p>مكان توقف لأنواع معينة من المركبات في المكان الذي لا يوجد فيه خليج : لا يجوز توقف مركبة في المساحة المستطيلة التي يشكلها طول حافة الشارع وعرض الوسم ، إلا إذا كانت المركبة من النوع الذي أُقيمت له شاخصة (محطة باص ، صالون عمومي وما شابه ذلك)
        من اجل إنزال واصعاد الركاب فقط</p>
        </div>
      </div>
    </div>


    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-18</span></p>
        <img src="assets/images/Road/121.jpg" class="img-fluid mb-2" alt="">
        <p>مكان توقف لأنواع معينة من المركبات في المكان الذي يوجد فيه خليج لهذا الغرض :
        لا يجوز توقف مركبة داخل الخليج أو بجانب الخط المتقطع. يجوز توقف مركبة من اجل إنزال أو اصعاد الركاب فقط في داخل الخليج إذا كانت المركبة من النوع الذي ذُكر بأنه يُسمح له بالتوقف بواسطة شاخصة .</p>
        </div>
      </div>
    </div>


    
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-20</span></p>
        <img src="assets/images/Road/122.jpg" class="img-fluid mb-2" alt="">
         <p>أحجار حافة مصبوغة بالأزرق بالتناوب
         يجوز الوقوف على الشارع بجانب أحجار الحافة بواسطة بطاقات وقوف</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>د-21</span></p>
        <img src="assets/images/Road/123.jpg" class="img-fluid mb-2" alt="">
        <p>أحجار حافة مصبوغة بالأحمر والأصفر :
        ممنوع التوقف إلا لأنواع المركبات التي سُمح بتوقفها بواسطة شاخصة (محطة باص يعمل على خط خدمة ، محطة صالون عمومي ، محطة لنقل الجنود) .</p>

        </div>
      </div>
    </div>





  </div>
</div>

    `;
  }else if(section === 'lights'){
  sectionContent.innerHTML = `
  <div class="container text-center my-5" id ="lights">
  <h2 class="mb-4">الآلات الضوئية</h2>
  <div class="row g-4">

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <p><span>هـ-1</span></p>
        <img src="assets/images/trafficLights/124.jpg" class="img-fluid mb-2" alt="">
        <p>((ضوء أحمر)) <br>
        قف ! و إذا وُسم خط وقوف فتوقف قبل خط الوقوف ، فإذا لم يوجد فقف قبل ممر المشاة ، أما إذا لم يوسم خط وقوف أو ممر مشاة فقف بجانب الآلة الضوئية القريبة</p>
        </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-2</span></p>
        <img src="assets/images/trafficLights/125.jpg" class="img-fluid mb-2" alt="">
       <p>((ضوء أحمر مع ضوء أصفر)) <br>
       قف كما ذُكر بالنسبة للشاخصة هـ-1 ، حتى ظهور الضوء الأخضر . يُحظر العبور عن خط الوقوف أو ممر المشاة أو الدخول إلى المفترق ما دام الضوء الأحمر مضيئاً مع الضوء الأصفر. استعد للسير عندما تتغير الإشارة</p>
        </div>
      </div>
    </div>

      <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-3</span></p>
        <img src="assets/images/trafficLights/126.jpg" class="img-fluid mb-2" alt="">
        <p>((ضوء أخضر)) <br>
        تقدم ! يجوز السير إلى الأمام والى اليمين والى اليسار ما لم تكن هناك شاخصة إرشاد فوق الآلة الضوئية والتي تشير إلى خلاف ذلك و إذا ظهر ضوء اخضر متقطع فمعناه بأن الضوء الأخضر سينتهي ويظهر بعده الضوء الأصفر</p>
         
       </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-5</span></p>
        <img src="assets/images/trafficLights/127.jpg" class="img-fluid mb-2" alt="">
         <p>((ضوء أصفر)) <br>
       على من يقترب من المفترق أن يقف كما ذُكر بالنسبة للشاخصة هـ-1 ، إلا إذا لم يكن بإمكان السائق أن يتوقف بأمان قبل المفترق
       وعلى من دخل المفترق أن يخليه فوراً</p>
           
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-6</span></p>
        <img src="assets/images/trafficLights/128.jpg" class="img-fluid mb-2" alt="">
        <p>آلة ضوئية خاصة للمركبات قبل ممر مشاة فيه آلة ضوئية للمشاة
        أو قبل أي عائق آخر في الطريق
        <br/> 
        ((ضوء أحمر))
        <br/>
        قف قبل خط التوقف وإذا لم يكن هناك خط توقف فقبل ممر المشاة</p>
        
       </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-7</span></p>
        <img src="assets/images/trafficLights/129.jpg" class="img-fluid mb-2" alt="">
        <p>آلة ضوئية خاصة للمركبات قبل ممر مشاة فيه آلة ضوئية للمشاة
        أو قبل أي عائق آخر في الطريق
        <br/>
       ((ضوء أصفر)) <br/>
       (أ) ضوء اصفر متقطع : تقدم بانتباه مع مراعاة أحكام الشاخصات
        <br/>
       (ب) ضوء اصفر ثابت : كمدلول الضوء الأصفر في شاخصة هـ-5</p>
        
       </div>
      </div>
    </div>



     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-8</span></p>
        <img src="assets/images/trafficLights/130.jpg" class="img-fluid mb-2" alt="">
        <p>آلة ضوئية خاصة للمركبات قبل منعطف
        أو تحذير عام أو قبل ممر مشاة
        ضوء اصفر متقطع مع أو بدون شكل ماشي
        <br/>
       (أ) تقدم بحذر مع مراعاة أحكام الشاخصات .<br/>
       (ب) إذا أُقيمت آلة ضوئية للمشاة بجانب ممر المشاة فعلى سائق المركبة أن يُمَكِن الماشي من عبور الشارع بأمان .</p>
        
       </div>
      </div>
    </div>

      <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-9</span></p>
        <img src="assets/images/trafficLights/131.jpg" class="img-fluid mb-2" alt="">
        <p>آلة ضوئية خاصة بالمشاة بجانب ممر المشاة.
        شكل شخص واقف باللون الأحمر
        يُحظر عبور الشارع وعلى من يتواجد في الشارع أن يخليه فوراً .</p>
        
       </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-10</span></p>
        <img src="assets/images/trafficLights/132.jpg" class="img-fluid mb-2" alt="">
        <p>آلة ضوئية خاصة بالمشاة بجانب ممر المشاة.
        شكل شخص ماشي باللون الأخضر
        يجوز عبور الشارع بحذر على ممر المشاة .</p>
        
       </div>
      </div>
    </div>

     <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>هـ-11</span></p>
        <img src="assets/images/trafficLights/133.jpg" class="img-fluid mb-2" alt="">
         <p>ضوء احمر مزدوج متقطع
         <br/>
         قف قبل خط التوقف وإذا لم يوجد خط توقف فقبل الحاجز القريب وإذا لم يوجد حاجز فعلى مسافة لا تقل عن 4م من خط السكة القريب ، وذلك لغاية توقف الضوء الأحمر المتقطع</p>
       </div>
      </div>
    </div>


  </div>
</div>

    `;
  }
  else if(section === 'helper'){
    sectionContent.innerHTML = `
  <div class="container text-center my-5" id ="helper">
  <h2 class="mb-4">شاخصات (إشارات) المساعدة</h2>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>و-1</span></p>
        <img src="assets/images/Help Sign/134.jpg" class="img-fluid mb-2" alt="حاجز قبل مكان عمل أو لسد طريق من قِبل سلطة مخولة : الطريق مسدودة ، إذا لم يتم سد الطريق على عرضها ، فيجوز لعابر الطريق تجاوز الحاجز والاستمرار بحذر على طول مكان العمل، إذا تم سد كل الطريق ، فيجوز لعابر الطريق التقدم فقط بالاتجاه الذي يتم توجيهه إليه بواسطة شاخصة مناسبة .">
        <p>حاجز قبل ملتقى سكة حديد :إذا كان الحاجز في حالة نزول أو في وضع أفقي ، فعلى عابر الطريق التوقف قبله</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>و-2</span></p>
        <img src="assets/images/Help Sign/135.jpg" class="img-fluid mb-2" alt="حاجز قبل مكان عمل أو لسد طريق من قِبل سلطة مخولة : الطريق مسدودة ، إذا لم يتم سد الطريق على عرضها ، فيجوز لعابر الطريق تجاوز الحاجز والاستمرار بحذر على طول مكان العمل، إذا تم سد كل الطريق ، فيجوز لعابر الطريق التقدم فقط بالاتجاه الذي يتم توجيهه إليه بواسطة شاخصة مناسبة .">
        <p>حاجز قبل مكان عمل أو لسد طريق من قِبل سلطة مخولة : الطريق مسدودة ، إذا لم يتم سد الطريق على عرضها ، فيجوز لعابر الطريق تجاوز الحاجز والاستمرار بحذر على طول مكان العمل، إذا تم سد كل الطريق ، فيجوز لعابر الطريق التقدم فقط بالاتجاه الذي يتم توجيهه إليه بواسطة شاخصة مناسبة .</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>و-3</span></p>
        <img src="assets/images/Help Sign/136.jpg" class="img-fluid mb-2"  alt="أحجار الحافة مدهونة باللون الأسود والأبيض : لإظهار وإبراز الحافات أو الفواصل أو الجزر المبنية">
        <p>أحجار الحافة مدهونة باللون الأسود والأبيض : لإظهار وإبراز الحافات أو الفواصل أو الجزر المبنية</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>و-7</span></p>
        <img src="assets/images/Help Sign/137.jpg" class="img-fluid mb-2" alt="أزرار مع أو بدون عاكس ضوء لإظهار وإبراز ترتيبات السير أو وسم في الطريق وحسب لون الوسم">
        <p>أزرار مع أو بدون عاكس ضوء لإظهار وإبراز ترتيبات السير أو وسم في الطريق وحسب لون الوسم</p>
        </div>
      </div>
    </div>

      <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
        <p><span>و-8</span></p>
        <img src="assets/images/Help Sign/138.jpg" class="img-fluid mb-2" alt="حاجز لوقاية المارة : بإغلاق مساحة الشارع أمام المشاة ، لا يجوز للماشي دخول مساحة الطريق التي يسدها الحاجز">
        <p>حاجز لوقاية المارة : بإغلاق مساحة الشارع أمام المشاة ، لا يجوز للماشي دخول مساحة الطريق التي يسدها الحاجز</p>
        </div>
      </div>
    </div>


      <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>و-9</span></p>
        <img src="assets/images/Help Sign/139.jpg" class="img-fluid mb-2" alt="شاخصة تحذير وإرشاد في ملتقى تفرع طرق: على سائق المركبة أن يتمهل بالسير ويتابع سيره بالاتجاهات الموسومة باسهم على الشاخصة . في الأمكنة التي تنفذ فيها أشغال على الطريق تكون الألوان برتقالي - ابيض.">
        <p>شاخصة تحذير وإرشاد في ملتقى تفرع طرق: على سائق المركبة أن يتمهل بالسير ويتابع سيره بالاتجاهات الموسومة باسهم على الشاخصة . في الأمكنة التي تنفذ فيها أشغال على الطريق تكون الألوان برتقالي - ابيض.</p>
        </div>
      </div>
    </div>

    
      <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
         <p><span>و-10</span></p>
        <img src="assets/images/Help Sign/140.jpg" class="img-fluid mb-2" alt="">
        <p>شاخصة تحذير وإرشاد في منعطف حاد : على سائق المركبة أن يتمهل بالسير ويتابع سيره بالاتجاه الموسوم باسهم على الشاخصة. في الأمكنة التي تنفذ فيها أشغال على الطريق تكون الألوان برتقالي - ابيض.</p>
        
        </div>
      </div>
    </div>








  </div>
</div>

    `;
  }else {
    sectionContent.innerHTML = `<h3 class="text-center text-muted">المحتوى لهذا القسم قيد الإنشاء</h3>`;
  }
}

    /*Sign Section End*/ 


    /*متطلبات الحصول على الرخصة*/
const details = document.querySelector(".details");
const price = document.querySelector(".price");
details.addEventListener('click',(e)=>{
 e.preventDefault();
 Swal.fire({
  title: " المتطلبات",
  
  html:`
  <!-- الأيقونة -->
        <div style="background:#198754; width:60px; height:60px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin:0 auto 15px;">
          <i class="bi bi-car-front" style="font-size:28px; color:#fff;"></i>
        </div> 
     <h3 style="margin-bottom:20px; font-weight:bold; color:#333;">خصوصي</h3>

        <!-- التفاصيل -->
        <div style="text-align:right; font-size:16px; line-height:2; color:#333;">
          <p>الوثائق المطلوبة :<b>صورتان شخصيتان , صورة عن الهوية</b></p>
          <p> العمر الأدنى: <b>يبدأ بالفحوصات بعمر 17 سنة</b></p>
          <p> الحصول على الرخصة: <b>يستلم الرخصة بعمر ال 17.5 سنة</b></p>
        </div>`,
  confirmButtonColor: "#198754", // اللون الأخضر
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
});
price.addEventListener('click',(e)=>{
  e.preventDefault();
 Swal.fire({
  title: " الأسعار (خصوصي)",
html: `
      <div style="background:#fff; border-radius:12px; padding:20px; text-align:center; font-family:Tahoma;">
        
        <!-- الأيقونة -->
        <div style="background:#198754; width:60px; height:60px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin:0 auto 15px;">
          <i class="bi bi-car-front" style="font-size:28px; color:#fff;"></i>
        </div>

        <!-- العنوان -->
        <h3 style="margin-bottom:20px; font-weight:bold; color:#333;">خصوصي</h3>

        <!-- التفاصيل -->
        <div style="text-align:right; font-size:16px; line-height:2; color:#333;">
          <p>✔ الدرس : <b>₪90</b></p>
          <p>✔ التست الأول : <b>₪290</b></p>
          <p>✔ التست الثاني وما فوق : <b>₪370</b></p>
          <p>✔ العمر الأدنى : <b>17 سنة</b></p>
        </div>

      </div>
    `,
  confirmButtonColor: "#198754", // اللون الأخضر
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
});
