
        // بيانات الأسئلة
        const questionsData = {
           1: [
        {//1
            question: `
                <p>تعني الشاخصة</p>
                <img src="assets/images/Warning/11.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options: ["مفترق تفرّع الى اليمين", "ممنوع الاستدارة الى اليمين", "خط وقوف على سطح الطريق", "ملتقى تفرّع طرق الى اليسار"],
            correct: "أ"
        },
        {//2
            question: "ما هي الشاخصة التي تسمح بالوقوف بجانب الرصيف بواسطة بطاقة وقوف:",
            options: [
                { value: "أ", img: "assets/images/Road/107.jpg" },
                { value: "ب", img: "assets/images/Help Sign/136.jpg" },
                { value: "ج", img: "assets/images/Help Sign/138.jpg" },
                { value: "د", img: "assets/images/Road/122.jpg" }
            ],
            correct: "د"
        },
        {//3
            question:  `
                <p>ما معنى الشاخصة</p>
                <img src="assets/images/Warning/27.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options: ["أولاد بالقرب من المكان " , "مكان عبور المارة على بعد 150م تقريبا ", "ممنوع دخول المارة ","سبيل للمشاة فقط"],
            correct: "ب"
        },
       {//4
            question:  `
                <p>ما معنى الشاخصة</p>
                <img src="assets/images/guidance/55.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options: ["ممنوع الوقوف والتوقف الا لتنفيذ أمر قانوني" , "ممنوع ايقاف المركبات في الجهة التي أقيمت فيها الشاخصة", "ممنوع دخول المركبات الميكانيكية ","مدخل ساحة خاصة"],
            correct: "ب"
        },
        {//5
            question:  `
                <p>خط متقطع الى جانب خط متواصل معناه</p>
                <img src="assets/images/Road/110.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options: ["يجوز اختراقهما إذا كان الخط المتقطع على يسار الخط المتواصل." , "لا يجوز اختراقهما في أية حالة من الحالات.", "يجوز اختراقهما عند تجاوز مركبة بطيئة فقط.","يجوز اختراقهما إذا كان الخط المتقطع على يمين الخط المتواصل."],
            correct: "د"
        },

        {//6
            question:  `
                <p>ماذا تعني هذه الشاخصة</p>
                <img src="assets/images/guidance/40.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options: ["يجوز تجاوز مركبة ميكانيكية تسير على عجلتين." , "جميع الإجابات صحيحة.","يجوز تجاوز مركبة غير ميكانيكية تسير على أكثر من عجلتين." ,"ممنوع تجاوز مركبة آلية تسير على أكثر من عجلتين."],
            correct: "ب"
        },
        {//7
            question:  `
                <p>ماذا ينهي مفعول هذه الشاخصة</p>
                <img src="assets/images/guidance/39.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["نهاية الطريق الضيقة أو المفترق القريب ." , { value: "ب", img: "assets/images/guidance/52.jpg" },"المفترق القريب فقط .","جميع الإجابات صحيحة."],
            correct: "أ"
        },
        {//8
            question:  `
                <p>يسري معفول الشاخصة</p>
                <img src="assets/images/guidance/36.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["فقط على اتجاه حركة السير المقابلة في الطريق التي أمامك.","على الطريق التي أمامك.","على الطريق التي تقود المركبة فيها.","على الطريق التي تقود المركبة فيها وحتى المفترق القريب."],
            correct: "ب"
        }
        ,
        {//9
            question:  `
                <p> تبعد الشاخصة أدناه عن ملتقى سكة الحديد</p>
                <img src="assets/images/Warning/19.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:[
                "270م قبل الملتقى.",
                {
            value: "ب",
            html: `  حسب وضعها فوق الشاخصة <img src="assets/images/Warning/20.jpg" style="max-width:100px; margin-left:10px;"> أو<img src="assets/images/Warning/21.jpg" style="max-width:100px; margin-left:10px;"> أو <img src="assets/images/Warning/22.jpg" style="max-width:100px; margin-left:10px;">`
        },
               
            "150م قبل الملتقى.","10م قبل الملتقى."
        ],
            correct: "ب"
        },
         {//10
            question:  `
                <p>الشاخصة الآتية معناها</p>
                <img src="assets/images/guidance/71.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["لا تجوز الاستدارة يميناً أو يساراً.","احذر من يمينك ومن يسارك.","الطريق تتحول من مسلك إلى مسلكين.","سر إلى اليمين أو إلى اليسار فقط."],
            correct:"د"
        },
        
     {//11
           question: "ما هي الشاخصة التي معناها لافتة للتحذير وللإرشاد وللمنع أو للتحديد؟",
           options: [
                { value: "أ", img: "assets/images/Warning/32.jpg" },
                { value: "ب", img: "assets/images/Help Sign/139.jpg" },
                { value: "ج", img: "assets/images/Road/118.jpg" },
                { value: "د", img: "assets/images/Help Sign/140.jpg" }
            ],            
            correct: "أ"
        },
       
         {//12
            question:  `
                <p>الشاخصة الآتية معناها</p>
                <img src="assets/images/guidance/73.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["يجوز عبور المكان الذي أقيمت عليه الشاخصة من اليمين ومن اليسار أيضاً.","الطريق تنحدر إلى اليمين والى اليسار.","ملتقى تفرع طرق إلى اليمين والى اليسار.","يجوز تجاوز المركبة التي أمامك من اليمين ومن اليسار أيضاً."],

            correct: "أ"
        },

          {//13
            question:  `
                <p>الشاخصة الآتية معناها</p>
                <img src="assets/images/Warning/16.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,

            options:["اندماج شارع مع طريق جانبية لها حق الأولوية ، ممنوع الاستدارة إلى اليمين .","اندماج شارع له حق الأولوية مع طريق جانبية من اليسار ، ممنوع الاستدارة إلى الطريق الجانبية.","اندماج شارع له حق الأولوية مع طريق جانبية من اليمين ، ممنوع الاستدارة إلى الطريق الجانبية .","اندماج مع شارع له حق الأولوية ، ممنوع الاستدارة إلى اليسار ."],
            correct: "ج"
        },

          {//14
            question:  `
                <p> بأية سرعة تسير عند رؤياك الشاخصة   </p>
                <img src="assets/images/Warning/1.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["بالسرعة القصوى المسموح بها في أنظمة المرور.","بسرعة الغيار الأول فقط.","بسرعة تلائم وضع الطريق.","في المركبات التجارية بسرعة لا تزيد عن 40كم/ساعة وفي المركبات الخصوصية بسرعة لا تزيد عن 50كم/ساعة."],
            correct: "ج"
        },
           {//15
            question:  `
                <p> هل هناك فرق بين الشاخصتين ادناه ؟</p>
                <div class="row">
                <img src="assets/images/Warning/10.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
                <img src="assets/images/Warning/11.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
                </div>
            `,
            options:["كلا، لا يوجد فرق بينهما.","نعم، الأولى تُحذر من مفترق تفرع والثانية تُحذر من مفترق تقاطع.","نعم، الأولى تُحذر من مفترق تقاطع والثانية تُحذر من مفترق تفرع.","نعم، الأولى تُحذر من ملتقى سكة حديد والثانية تُحذر من مفترق تفرع."],
            correct: "ج"
        },
         {//16
            question:  `
                <p>اذا أقيمت الشاخصة الآتية فوق المسلك فتسري على</p>
                <img src="assets/images/guidance/51.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["على مسلك التجاوز في الشارع.","على جميع المسالك في الشارع ما عدا مسلك المواصلات العمومية.","على جميع المسالك في الشارع.","على المسلك الذي تحتها."],
            correct: "د"
        },
          {//17
            question:  `
                <p>الشاخصة معناها</p>
                <img src="assets/images/Warning/19.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["أمامك محطة قطارات.","ملتقى سكة حديد ذات خط واحد.","أمامك ملتقى سكة حديد.","قف لأن القطار يمر الآن."],
            correct: "ج"
        },
         {//18
            question:  `
                <p>الشاخصة معناها</p>
                <img src="assets/images/Warning/13.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["اندماج طريق من اليسار ثم من اليمين.","تقاطع طرق من الأمام واليمين واليسار.","مفترقات طرق إلى اليسار ثم إلى اليمين.","مفترقات طرق إلى اليمين ثم إلى اليسار."],
            correct: "د"
        },


        {//19
    question: `
        <p>عندما تقام الشاخصة أدناه فأين يذكر نوع الخطر؟</p>
        <img src="assets/images/Warning/13.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
    `,
    options: [
        {
            value: "أ",
            html: `<img src="assets/images/information/97.jpg" style="max-width:100px; margin-left:10px;"> على الشاخصة إذا كان الخطر في داخل المدن.`
        },
        {
            value: "ب",
            html: `<img src="assets/images/information/98.jpg" style="max-width:100px; margin-left:10px;"> على الشاخصة إذا كان الخطر في طريق سريعة.`
        },
        {
            value: "ج",
            html: `<img src="assets/images/Warning/32.jpg" style="max-width:100px; margin-left:10px;"> على الشاخصة`
        },
        {
            value: "د",
            html: "على سطح الطريق."
        }
    ],
    correct: "ج"
},

       
    {//20
            question:  `
                <p>الشاخصة معناها</p>
                <img src="assets/images/guidance/45.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["ممنوع دخول الدراجات النارية باستثناء الدراجات النارية مع زورق جانبي .","ممنوع دخول الدراجات النارية .","ممنوع دخول الدراجات النارية التي تسير على عجلتين فقط .","ممنوع دخول الدراجات النارية باستثناء الدراجات النارية التي تجر مقطورة ."],
            correct: "ب"
        },
          {//21
            question:  `
                <p>ضوء احمر واصفر مع بعض في الآلة الضوئية  </p>
                <img src="assets/images/trafficLights/125.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
            options:["اعبر المفترق بسرعة قبل أن يتحول الضوء إلى احمر.","استعد للوقوف عند ظهور الضوء الأحمر.","استعد للسير عند ظهور الضوء الأخضر.","خفف السرعة عند ظهور الضوء الأصفر."],
            correct: "ج"
        },
         {//22
            question:  `
                <p> المسافة بين شاخصة تحذير والشيء التي تحذر منه تكون عادةً:</p>
            `,
        options:["100م." ,"150م","170م","250م"],
            correct: "ب"
        },

        {//23
            question:  `
            <p>هل يجوز أن تقام الشاخصة الآتية في طريق خارج المدن ؟ </p>
            <img src="assets/images/information/96.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
        options:["نعم","كلا ، لا يجوز للمشاة أن يسيروا في طريق خارج المدن." ,"تُقام عند المحطات العمومية فقط.","تُقام فقط عند المحطات العمومية في طريق خارج المدن وليس في الطريق السريعة."],
            correct: "أ"
        },
         {//24
            question:  `
            <p>ماذا ينهي الشاخصة الآتية؟</p>
             <img src="assets/images/guidance/42.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
            `,
                options: [
        {
            value: "أ",
            html: ` الشاخصةالآتية فقط <img src="assets/images/guidance/43.jpg" style="max-width:100px; margin-left:10px;">   .`
        },
        {
            value: "ب",
            html: ` الشاخصة<img src="assets/images/guidance/58.jpg" style="max-width:100px; margin-left:10px;"> `
        },
        {
            value: "ج",
            html: `<img src="assets/images/guidance/43.jpg" style="max-width:100px; margin-left:10px;"> المفترق القريب أو الشاخصة الآتية  إذا لم يكن هناك مفترق في المقطع الذي يُمنع فيه التجاوز. `
        },
        {
            value: "د",
            html: ` الشاخصة <img src="assets/images/guidance/59.jpg" style="max-width:100px; margin-left:10px;"> `
        }
    ],
            correct: "ج"
        },
         {//25
            question:  `
        <p>هل يجوز لدراجة هوائية دخول شارع أقيمت على مدخله الشاخصة  </p>
        <img src="assets/images/guidance/35.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
        `,
        options:["كلا لا يجوز.","نعم يجوز.","يجوز لها الدخول إذا كانت تسير على عجلتين.","يجوز لها الدخول إذا كانت تسير على ثلاث عجلات."],
        correct: "أ"
        },

     {//26
            question:  `
        <p>هل يجوز لشخص يصطحب كلباً الدخول في شارع أقيمت على مدخله الشاخصة </p>
        <img src="assets/images/guidance/83.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
        `,
        options:["يجوز للضرير فقط.","نعم يجوز.","كلا لا يجوز.","يجوز له فقط إذا كان الكلب مربوطاً بقشاط."],
        correct: "ب"
        },
         {//27
            question:  `
          <p>تعني الشاخصة الآتية</p>
          <img src="assets/images/guidance/46.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
        `,
        options:["ممنوع الدخول لجميع المركبات الميكانيكية ما عدا الدراجة النارية بدون زورق جانبي .","ممنوع الدخول لجميع المركبات بما في ذلك الدراجة النارية بدون زورق جانبي .","ممنوع الدخول لجميع المركبات بما في ذلك الدراجة النارية .","ممنوع الدخول لجميع المركبات الميكانيكية ."],
        correct: "د"
        },
          {//28
            question:  `
          <p>تعني الشاخصة الآتية</p>
          <img src="assets/images/guidance/75.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
        `,
        options:["طريق للمركبات الخصوصية والخصوصية المزدوجة الاستعمال والصالون العمومي فقط.","طريق للمركبات الميكانيكية التي تستطيع ويجوز لها السير بسرعة تزيد عن 55كم/ساعة .","طريق للمركبات الميكانيكية فقط .","طريق للمركبات الميكانيكية باستثناء الدراجة النارية بدون عربة جانبية ."],
        correct: "ج"
        },
   {//29
        question:  `
          <p>تعني الشاخصة الآتية</p>
          <img src="assets/images/guidance/43.jpg" alt="إشارة مرور" style="max-width:150px; display:block; margin:10px auto;">
        `,

        options:["لا يجوز للشاحنات مجاوزة المركبات الخصوصية فقط.","لا يجوز للشاحنات استعمال المسلك الأيسر .","نهاية مقطع الطريق الذي يسري عليه منع التجاوز .","ممنوع تجاوز مركبة تجارية يزيد وزنها الإجمالي عن 4000كغم ."],
        correct: "ج"
    },
     {//30
           question: "ما هي الشاخصة التي معناها لافتة للتحذير وللإرشاد وللمنع أو للتحديد؟",
           options: [
                { value: "أ", img: "assets/images/Road/121.jpg" },
                { value: "ب", img: "assets/images/Road/118.jpg" },
                { value: "ج", img: "assets/images/information/91.jpg" },
                { value: "د", img: "assets/images/Road/122.jpg" }
            ],            
            correct: "أ"
        },

    ],
        };

        document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const examId = parseInt(urlParams.get('id')) || 1;

            const loading = document.getElementById('loading');
            const examContent = document.getElementById('exam-content');
            const questionsContainer = document.getElementById('questions-container');
            const progressFill = document.getElementById('progress-fill');
            const progressText = document.getElementById('progress-text');
            const timerEl = document.getElementById('timer');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const submitBtn = document.getElementById('submit-btn');
            const quizForm = document.getElementById('quiz-form');
            const resultDiv = document.getElementById('result');
            const questionsGrid = document.getElementById('questions-grid');
            const questionHeader = document.getElementById('question-header');
            const toggleSwitch = document.getElementById('toggleSwitch');

            let questions = questionsData[examId] || [];
            if (questions.length === 0) {
                if (loading) loading.textContent = 'لا توجد أسئلة لهذا الامتحان.';
                return;
            }

            let currentQuestion = 0;
            let userAnswers = new Array(questions.length).fill(null);
            let timeLeft = 40 * 60;
            let timerInterval;
            let startTime = Date.now();
            let examSubmitted = false;
            let autoAdvance = false;

            // تهيئة شبكة الأسئلة
            function initQuestionsGrid() {
                questionsGrid.innerHTML = '';
                for (let i = 0; i < questions.length; i++) {
                    const btn = document.createElement('div');
                    btn.className = 'question-number';
                    btn.textContent = i + 1;
                    btn.onclick = () => goToQuestion(i);
                    questionsGrid.appendChild(btn);
                }
            }

            // الانتقال لسؤال معين
            function goToQuestion(index) {
                if (examSubmitted) return;
                currentQuestion = index;
                displayQuestion();
            }

            // تحديث شبكة الأسئلة
            function updateGrid() {
                const gridItems = questionsGrid.children;
                for (let i = 0; i < gridItems.length; i++) {
                    gridItems[i].className = 'question-number';
                    if (i === currentQuestion) {
                        gridItems[i].classList.add('current');
                    } else if (userAnswers[i] !== null) {
                        gridItems[i].classList.add('answered');
                    }
                }
            }

            // محاكاة التحميل
            setTimeout(() => {
                if (loading) loading.style.display = 'none';
                if (examContent) examContent.style.display = 'block';
                initQuestionsGrid();
                displayQuestion();
                startTimer();
            }, 1500);

            function displayQuestion() {
                if (currentQuestion >= questions.length) {
                    if (nextBtn) nextBtn.style.display = 'none';
                    if (prevBtn) prevBtn.style.display = 'none';
                    if (submitBtn) submitBtn.style.display = 'inline-block';
                    return;
                }

                const q = questions[currentQuestion];
                
                const formattedOptions = q.options.map((opt, i) => {
                    const label = ['أ', 'ب', 'ج', 'د'][i];
                    
                    if (typeof opt === 'string') {
                        return { label, html: opt };
                    } else if (opt.value && opt.img) {
                        return { 
                            label: opt.value, 
                            html: `<img src="${opt.img}" alt="${opt.value}" style="max-width:150px; display:block; margin:5px auto;" onerror="this.style.display='none';">`
                        };
                    } else if (opt.value && opt.html) {
                        return { 
                            label: opt.value, 
                            html: opt.html 
                        };
                    } else if (opt.html) {
                        return { 
                            label, 
                            html: opt.html 
                        };
                    } else {
                        return { label, html: JSON.stringify(opt) };
                    }
                });


                if (questionHeader) {
                    questionHeader.textContent = `سؤال ${currentQuestion + 1} من ${questions.length}`;
                }

                if (questionsContainer) {
                    questionsContainer.innerHTML = `
                        <div class="question" dir="rtl">
                            <div class="question-content">${q.question}</div>
                            <ul class="options-list">
                                ${formattedOptions.map(opt => {
                                    const selected = userAnswers[currentQuestion] === opt.label ? 'selected' : '';
                                    return `
                                        <li class="option-item">
                                            <label class="option-label ${selected}" data-option="${opt.label}">
                                                <div class="option-letter">${opt.label}</div>
                                                <div class="option-text">${opt.html}</div>
                                            </label>
                                        </li>
                                    `;
                                }).join('')}
                            </ul>
                        </div>
                    `;

                    document.querySelectorAll('.option-label').forEach(opt => {
                        opt.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (examSubmitted) return;
                            this.closest('ul').querySelectorAll('.option-label').forEach(o => o.classList.remove('selected'));
                            this.classList.add('selected');
                            userAnswers[currentQuestion] = this.dataset.option;
                            
                            // تحديث الشبكة والتقدم
                            updateGrid();
                            updateProgress();
                            
                            // الانتقال التلقائي
                            if (autoAdvance && currentQuestion < questions.length - 1) {
                                setTimeout(() => {
                                    currentQuestion++;
                                    displayQuestion();
                                }, 500);
                            }
                            
                            return false;
                        });
                    });
                }

                updateProgress();
                updateGrid();

                if (prevBtn) prevBtn.disabled = currentQuestion === 0;
                if (nextBtn) {
                    nextBtn.disabled = false;
                    nextBtn.style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
                }
                if (submitBtn) submitBtn.style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
            }

            function updateProgress() {
                const answered = userAnswers.filter(a => a !== null).length;
                const progress = Math.round((answered / questions.length) * 100);
                if (progressFill) progressFill.style.width = progress + '%';
                if (progressText) progressText.textContent = progress + '%';
            }

            // زر السابق
            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (currentQuestion > 0) {
                        currentQuestion--;
                        displayQuestion();
                    }
                });
            }

            // زر التالي
            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (currentQuestion < questions.length - 1) {
                        if (!userAnswers[currentQuestion]) {
                            if (typeof Swal !== 'undefined') {
                                Swal.fire({
                                    title: 'تحذير!',
                                    text: 'لم تقم باختيار إجابة لهذا السؤال.',
                                    icon: 'warning',
                                    confirmButtonText: 'متابعة',
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                            }
                        }
                        currentQuestion++;
                        displayQuestion();
                    }
                });
            }

            // زر إنهاء الامتحان
            if (submitBtn) {
                submitBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    submitExam(false);
                });
            }

            // منع submit
            if (quizForm) {
                quizForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitExam(false);
                });
            }

            // الانتقال التلقائي
            if (toggleSwitch) {
                toggleSwitch.addEventListener('click', () => {
                    autoAdvance = !autoAdvance;
                    toggleSwitch.classList.toggle('active');
                });
            }

            // بدء التايمر
            function startTimer() {
                if (timerInterval) clearInterval(timerInterval);
                timerInterval = setInterval(() => {
                    timeLeft--;
                    const minutes = Math.floor(timeLeft / 60);
                    const seconds = timeLeft % 60;
                    if (timerEl) {
                        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                        timerEl.className = timeLeft <= 300 ? 'timer text-danger' : 'timer';
                    }

                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        submitExam(true);
                    }
                }, 1000);
            }

            // إرسال الامتحان
            function submitExam(timeUp = false) {
                if (examSubmitted) return;
                examSubmitted = true;
                if (timerInterval) clearInterval(timerInterval);

                const endTime = Date.now();
                const timeTaken = Math.round((endTime - startTime) / 1000 / 60);

                let score = 0;
                questions.forEach((q, i) => {
                    if (userAnswers[i] === q.correct) score++;
                });
                const totalQuestions = questions.length;
                const percentage = Math.round((score / totalQuestions) * 100);

                if (examContent) examContent.style.display = 'none';
                if (loading) loading.style.display = 'none';
//-------------------------------------------
                const isPassed = score >= 25;
let motivationalMessage = '';
let icon = 'info';
let resultStatus = isPassed ? '✅ ناجح' : '❌ راسب';

if (isPassed) {
    if (percentage >= 80) {
        motivationalMessage = 'ممتاز! أنت متفوق، استمر في التعلم لتصبح الأفضل.';
        icon = 'success';
    } else {
        motivationalMessage = 'جيد جدًا! أنت على الطريق الصحيح، زد من مجهودك قليلاً.';
        icon = 'success';
    }
} else {
    motivationalMessage = 'لم تنجح! لا تقلق، النجاح يأتي بالممارسة. ابدأ من جديد وستنجح! (تحتاج 25 إجابة صحيحة للنجاح)';
    icon = 'error';
}
//------------------------------------------------------
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: timeUp ? 'انتهى الوقت!' : 'تم إنهاء الامتحان !',
                        html: `
                            <div style="text-align: center; direction: rtl;">
                                <p><strong>نتيجتك: ${score} / ${totalQuestions} (${percentage}%)</strong></p>
                                <p>${motivationalMessage}</p>
                                <p>تم إكمال الامتحان في ${timeTaken} دقيقة.</p>
                            </div>
                        `,
                        icon: icon,
                        confirmButtonText: 'عرض التفاصيل',
                        allowOutsideClick: false,
                        backdrop: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            showResults(score, totalQuestions, percentage, motivationalMessage, timeTaken, icon);
                        }
                    });
                } else {
                    alert(`${timeUp ? 'انتهى الوقت!' : 'تم إنهاء الامتحان!'} \nنتيجتك: ${score}/${totalQuestions} (${percentage}%) \n${motivationalMessage} \nالوقت: ${timeTaken} دقيقة`);
                    showResults(score, totalQuestions, percentage, motivationalMessage, timeTaken, icon);
                }
            }

            // عرض النتائج مع التفاصيل
            function showResults(score, totalQuestions, percentage, motivationalMessage, timeTaken, icon) {
                if (resultDiv) {
                    let detailsHtml = '<div id="exam-details" style="margin-top: 20px; direction: rtl; display: block;">';
                    detailsHtml += '<h5>تفاصيل الإجابات:</h5>';
                    
                    questions.forEach((q, i) => {
                        const userAnswer = userAnswers[i];
                        const isCorrect = userAnswer === q.correct;
                        const isAnswered = userAnswer !== null;
                        let statusIcon = isAnswered ? (isCorrect ? '✅' : '❌') : '❓';
                        let statusText = isAnswered ? (isCorrect ? 'صحيح' : 'خاطئ') : 'غير مجاب';
                        let statusClass = isAnswered ? (isCorrect ? 'text-success' : 'text-danger') : 'text-muted';

                        const formattedOptions = q.options.map((opt, j) => {
                            const label = ['أ', 'ب', 'ج', 'د'][j];
                            let optionClass = '';
                            let optionIcon = '';
                            if (userAnswer === label) {
                                optionClass = 'user-selected';
                                optionIcon = ' (إجابتك)';
                            }
                            if (label === q.correct) {
                                optionClass += ' correct-answer';
                                optionIcon += ' (الصحيحة)';
                            }
                            let optionContent = `${label}: `;
                            if (typeof opt === 'string') {
                                optionContent += opt + optionIcon;
                            } else if (typeof opt === 'object' && opt.value && opt.img) {
                                optionContent += `<img src="${opt.img}" alt="${label}" style="max-width:150px; display:block; margin:5px auto;" onerror="this.style.display='none';"> ${optionIcon}`;
                            } else if (typeof opt === 'object' && opt.value && opt.html) {
                                optionContent += opt.html + optionIcon;
                            } else if (typeof opt === 'object' && opt.html) {
                                optionContent += opt.html + optionIcon;
                            } else {
                                optionContent += String(opt) + optionIcon;
                            }
                            return { label, content: optionContent, class: optionClass };
                        });

                        detailsHtml += `
                            <div class="question-detail mb-4 p-3 border rounded" dir="rtl">
                                <h6>سؤال ${i + 1}: ${q.question}</h6>
                                <p class="${statusClass}"><strong>${statusIcon} ${statusText}</strong></p>
                                <ul class="options list-unstyled">
                                    ${formattedOptions.map(opt => `<li class="${opt.class}">${opt.content}</li>`).join('')}
                                </ul>
                                <p class="text-info"><strong>الإجابة الصحيحة: ${q.correct}</strong></p>
                            </div>
                        `;
                    });
                    
                    detailsHtml += '</div>';

                    const alertClass = icon === 'success' ? 'alert-success' : icon === 'warning' ? 'alert-warning' : 'alert-danger';
                    
                    resultDiv.innerHTML = `
                        <div class="alert ${alertClass}" dir="rtl">
                            <h4>نتيجة الامتحان ${examId}</h4>
                            <p>الدرجة: ${score} من ${totalQuestions} (${percentage}%)</p>
                            <p>${motivationalMessage}</p>
                            <p>الوقت المستغرق: ${timeTaken} دقيقة</p>
                            ${detailsHtml}
                            <a href="ExamPage.html" class="btn btn-primary mt-3" style="background:#2196F3; color:white; padding:12px 30px; text-decoration:none; border-radius:8px; display:inline-block; margin-top:20px;">العودة إلى الامتحانات</a>
                        </div>
                    `;
                    resultDiv.style.display = 'block';
                }

                // حفظ النتيجة
                localStorage.setItem(`exam_${examId}_result`, JSON.stringify({
                    score: percentage,
                    timeTaken: timeTaken,
                    date: new Date().toLocaleString('ar-SA')
                }));
            }
        });
    