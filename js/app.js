$(function () {
  // 1. Slayderdi sazlaw 
  var $slider = $(".slider-items").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  });

  // LocalStoragedan eski kommentariyalardi júklew
  var localComments = JSON.parse(localStorage.getItem("userComments")) || [];
  localComments.forEach(function (c) {
    $slider.slick("slickAdd", createCommentHtml(c.id, c.text, c.fullName, c.image));
  });

  // Pikir ushın HTML shablon (Súwret yamasa Háripli avatar menen)
  function createCommentHtml(id, text, fullName, avatar) {
    var avatarHtml = "";
    
    // Eger súwret bar bolsa
    if (avatar && avatar.startsWith("data:image")) {
      avatarHtml = `<img src="${avatar}" alt="Avatar">`;
    } else {
      // Súwret bolmasa, Google akkauntı sıyaqlı attıń bas háribin alamız
      var firstLetter = fullName ? fullName.trim().charAt(0).toUpperCase() : "?";
      avatarHtml = `<div class="letter-avatar">${firstLetter}</div>`;
    }

    return `
      <div class="slider-item" data-id="${id}">
        <div class="slider-item__inner" style="position: relative;">
          <button class="delete-comment-btn" title="Óshiriw">&times;</button>
          <p class="slider-item__info">"${text}"</p>
          <div class="slider-item__person">
            <span class="img">
              ${avatarHtml}
            </span>
            <h4 class="person-name">${fullName}</h4>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Formani jiberiw 
  $("#commentForm").on("submit", function (e) {
    e.preventDefault(); 
    var name = $("#userName").val().trim();
    var surname = $("#userSurname").val().trim();
    var message = $("#userMessage").val().trim();
    var avatarInput = document.getElementById("userAvatar");
    var commentId = Date.now();
    var fullName = name + " " + surname;

    // Súwret júklengen bolsa oqıydı, bolmasa null (bos) etip jiberedi
    if (avatarInput && avatarInput.files && avatarInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (event) {
        addComment(commentId, message, fullName, event.target.result);
      };
      reader.readAsDataURL(avatarInput.files[0]);
    } else {
      addComment(commentId, message, fullName, null);
    }
  });

  function addComment(id, text, name, avatar) {
    $slider.slick("slickAdd", createCommentHtml(id, text, name, avatar));
    localComments.push({ id: id, text: text, fullName: name, image: avatar });
    localStorage.setItem("userComments", JSON.stringify(localComments));
    $("#commentForm")[0].reset();
    alert("Kommentariyańiz tabıslı qosıldı!");
    location.reload(); // Slayder mashqalasız jańalanıwı ushın
  }

  // 3. Óshiriw bólimi
  $(document).on("click", ".delete-comment-btn", function () {
    var $commentItem = $(this).closest(".slider-item");
    var commentId = $commentItem.attr("data-id");

    if (commentId && confirm("Kommentariyani óshiriwdi qáleysiz be?")) {
      localComments = localComments.filter(function (c) { return c.id != commentId; });
      localStorage.setItem("userComments", JSON.stringify(localComments));
      location.reload();
    }
  });
});

$(function () {
  // 9 xalıqaralıq universitetler maǵlıwmatlar bazası
  var universityDatabase = [
    {
      name: "🏛️ University of Toronto (Kanada)",
      majors: ["IT", "Business", "Medical", "Humanities"],
      minIelts: 6.5,
      minCefr: "B2",
      minGpa: "B"
    },
    {
      name: "🏛️ Harvard University (AQSh)",
      majors: ["IT", "Business", "Medical", "Humanities", "Engineering"],
      minIelts: 7.0,
      minCefr: "C1",
      minGpa: "A"
    },
    {
      name: "🏛️ University of Oxford (Ullı Britaniya)",
      majors: ["Business", "Medical", "Humanities"],
      minIelts: 7.0,
      minCefr: "C1",
      minGpa: "A"
    },
    {
      name: "🏛️ Stanford University (AQSh)",
      majors: ["IT", "Engineering", "Business"],
      minIelts: 7.0,
      minCefr: "C1",
      minGpa: "A"
    },
    {
      name: "🏛️ ETH Zurich (Shveycariya)",
      majors: ["IT", "Engineering"],
      minIelts: 6.5,
      minCefr: "B2",
      minGpa: "A"
    },
    {
      name: "🏛️ University of Cambridge (Ullı Britaniya)",
      majors: ["IT", "Engineering", "Medical"],
      minIelts: 7.0,
      minCefr: "C1",
      minGpa: "A"
    },
    {
      name: "🏛️ Technical University of Munich (Germaniya)",
      majors: ["IT", "Engineering"],
      minIelts: 5.5,
      minCefr: "B1",
      minGpa: "B"
    },
    {
      name: "🏛️ University of Edinburgh (Shotlandiya)",
      majors: ["Humanities", "Business", "Medical"],
      minIelts: 6.5,
      minCefr: "B2",
      minGpa: "B"
    },
    {
      name: "🏛️ National University of Singapore (Singapur)",
      majors: ["IT", "Engineering", "Business"],
      minIelts: 6.5,
      minCefr: "B2",
      minGpa: "A"
    }
  ];

  // CEFR dárejelerin salıstırıw ushın sanlarǵa ótkeriw
  function cefrToScore(level) {
    if (level === "C1") return 3;
    if (level === "B2") return 2;
    if (level === "B1") return 1;
    return 0;
  }

  // GPA (bahalar) dárejelerin salıstırıw ushın sanlarǵa aylandırıw
  function gpaToScore(grade) {
    if (grade === "A") return 3; // 5 baha / 90-100%
    if (grade === "B") return 2; // 4 baha / 75-89%
    return 1; // 3 baha / 60-74%
  }

  // "Universitetlerdi tabıw" knopkasi basılǵanda
  $('#predict-btn').click(function () {
    // Select inputlardan mánislerdi oqıp alıw
    var selectedMajor = $('#ai-major').val();
    var ielts = parseFloat($('#ai-ielts').val());
    var cefr = $('#ai-cefr').val();
    var selectedGpa = $('#ai-gpa').val();
    var resultDiv = $('#ai-result');

    resultDiv.hide().html('');

    var userCefrScore = cefrToScore(cefr);
    var userGpaScore = gpaToScore(selectedGpa);

    // Keńeytilgen AI saralaw filtri
    var RecommendedUniversities = universityDatabase.filter(function (uni) {
      // 1. Taraw sáykesligin tekseriw
      var majorMatch = uni.majors.includes(selectedMajor);

      // 2. Til talabın tekseriw (IELTS yaki CEFR dan biri jetse jetedi)
      var ieltsMatch = ielts >= uni.minIelts;
      var cefrMatch = userCefrScore >= cefrToScore(uni.minCefr);
      var languageMatch = ieltsMatch || cefrMatch;

      // 3. Bahalar (GPA) talabın tekseriw
      var gpaMatch = userGpaScore >= gpaToScore(uni.minGpa);

      return majorMatch && languageMatch && gpaMatch;
    });

    // Keńes tekstin ballar boyınsha anıqlaw
    var advice = "";
    if (ielts >= 7.0 || cefr === "C1") {
      advice = "🔥 Zor nátiyje! Siziń til dárejesińiz hám kórsetkishlerińiz dúnya reytingindegi eń aldınǵı oqıw orınlarına tuwra keledi. Bul universitetlerge qabıllanıw hám grant utıw imkániyatıńız júdá joqarı!";
    } else if (ielts >= 6.5 || cefr === "B2") {
      advice = "👍 Júdá jaqsı nátiyje! Bul ballar jetekshi xalıqaralıq universitetlerdiń bakalavr baǵdarlarına tikkeley kiriw talaplarına tolıq juwap beredi. Hújjetlerdi tayarlawdı baslasańız boladı!";
    } else if (ielts >= 5.5 || cefr === "B1") {
      advice = "📈 Imkániyat bar. Germaniyanıń TU of Munich universitetinde til biliw dárejesi menen birge tayarlıq kursların ótiw arqalı oqıwǵa kiriw imkánıńız bar.";
    } else {
      advice = "🔍 AI usınısı: Házirshe saytımızdaǵı top-universitetlerdiń talaplarına ballarıńız biraz jetpeydi. Til úyreniwdi dawam etiń, bahalardı kóterip, qaytadan baqlap kóriwińizdi usınıs etemiz!";
    }

    // Nátiyje interfeysin generaciyalaw
    var htmlContent = `<strong style="color: #007bff; display: block; margin-bottom: 10px; font-size: 16px;">🤖 AI analiz nátiyjesi:</strong>`;
    htmlContent += `<p style="margin-bottom: 12px;">${advice}</p>`;

    if (RecommendedUniversities.length > 0) {
      htmlContent += `<hr style="border: 0; border-top: 1px solid #ddd; margin: 10px 0;">`;
      htmlContent += `<p style="font-weight: bold; color: #333; margin-bottom: 8px;">Sizge usınıs etiletuǵın universitetler:</p><ul style="padding-left: 20px; margin-top: 5px;">`;
      
      RecommendedUniversities.forEach(function (uni) {
        htmlContent += `<li style="margin-bottom: 6px; color: #28a745; font-weight: bold; list-style-type: none; position: relative; padding-left: 5px;">${uni.name} (${uni.majors.join(", ")})</li>`;
      });
      
      htmlContent += `</ul>`;

      // Jasıl fon (Eger universitet tabılsa)
      resultDiv.css({ 'background': '#e8f5e9', 'border': '1px solid #c8e6c9', 'color': '#2e7d32' });
    } else {
      // Qızıl fon (Eger sáykes universitet tabılmasa)
      htmlContent = `<strong style="color: #ef0000; display: block; margin-bottom: 10px; font-size: 16px;">🤖 AI analiz nátiyjesi:</strong><p>${advice}</p>`;
      resultDiv.css({ 'background': '#fff3e0', 'border': '1px solid #ffe0b2', 'color': '#ef0000' });
    }

    resultDiv.html(htmlContent).fadeIn(500);
  });
});

// Úsh sızıq basılǵanda menyudi ashiw hám jabıw
document.addEventListener('DOMContentLoaded', function() {
    const barsBtn = document.querySelector('.bars-btn');
    const headerMenu = document.querySelector('.header-items');

    if (barsBtn && headerMenu) {
        barsBtn.addEventListener('click', function() {
            headerMenu.classList.toggle('active');
        });
    }
});