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
    
  });
});
function loadSection(section){

  if(section === 'road'){
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
  }




  else if(section === 'lights'){
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
  } else {
    sectionContent.innerHTML = `<h3 class="text-center text-muted">المحتوى لهذا القسم قيد الإنشاء</h3>`;
  }
}

    /*Sign Section End*/ 