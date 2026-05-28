$(function () {
  // 1. Sliderdi sazlaw 
  var $slider = $(".slider-items").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  });

  // 2. Formani jiberiw (Submit) 
  $("#commentForm").on("submit", function (e) {
    e.preventDefault(); 

    // Inputlardan mánislerdi oqip alamiz
    var name = $("#userName").val();
    var surname = $("#userSurname").val();
    var message = $("#userMessage").val();

    var newSlide = `
      <div class="slider-item">
        <div class="slider-item__inner">
          <p>"${message}"</p>
          <h4>${name} ${surname}</h4>
        </div>
      </div>
    `;

    // Taza slaydtı slayder qatarına qosıw
    $slider.slick("slickAdd", newSlide);

    // Formani tazalaw
    $("#commentForm")[0].reset();

    alert("Kommentariyańiz tabıslı qosıldı!");
  });
});

$(document).ready(function() {
  $('#predict-btn').click(function() {
    // Ballardi aliw
    let ielts = parseFloat($('#ai-ielts').val());
    let cefr = $('#ai-cefr').val();
    let resultDiv = $('#ai-result');

    resultDiv.hide().html('');

    let RecommendedUniversities = [];
    let advice = "";

    //AI saralaw algoritmi
    if (ielts >= 7.0 || cefr === "C1") {
      RecommendedUniversities = [
        "🏛️ Harvard University (AQSh)",
        "🏛️ University of Oxford (Ulli Britaniya)",
        "🏛️ University of Cambridge (Ulli Britaniya)",
        "🏛️ Stanford University (AQSh)"
      ];
      advice = "🔥 Zor nátiyje! Siziń til dárejesińiz dúnya reytińindegi eń aldınǵı oqıw orınlarına tuwrı keledi. Bul universitetlerge qabıllanıw hám grant utıw imkaniyatıńız júdá joqarı!";
    } 
    else if (ielts >= 6.5 || cefr === "B2") {
      RecommendedUniversities = [
        "🏛️ ETH Zurich (Shveytsariya)",
        "🏛️ University of Toronto (Kanada)",
        "🏛️ University of Edinburgh (Shotlandiya)",
        "🏛️ National University of Singapore (Singapur)"
      ];
      advice = "👍 Júdá jaqsı nátiyje! Bul ballar jetekshi xalıqaralıq universitetlerdiń bakalavr baǵdarlarına tikkeley kiriw talaplarına tolıq juwap beredi. Hújjetlerdi tayarlawdı baslasańız boladı!";
    } 
    else if (ielts >= 5.5 || cefr === "B1") {
      RecommendedUniversities = [
        "🏛️ Technical University of Munich (Germaniya)"
      ];
      advice = "📈 Imkániyat bar. Germaniyanıń TU of Munich universitetinde til biliw dárejesi menen birge tayarlıq kursların ótiw arqalı oqıwǵa kiriw imkánıńız bar.";
    } 
    else {
      RecommendedUniversities = [];
      advice = "🔍 AI usınısı: Házirshe saytımızdaǵı top-universitetlerdiń talaplarına ballarıńız biraz jetpeydi. Til úyreniwdi dawam etiń hám dárejeńizdi kóterip, qaytadan baqlap kóriwdi usınıs etemiz!";
    }

    // Nátiyje interfeysin formatlaw
    let htmlContent = `<strong style="color: #007bff; display: block; margin-bottom: 10px; font-size: 16px;">🤖 AI analiz nátiyjesi:</strong>`;
    htmlContent += `<p style="margin-bottom: 12px;">${advice}</p>`;

    if (RecommendedUniversities.length > 0) {
      htmlContent += `<hr style="border: 0; border-top: 1px solid #ddd; margin: 10px 0;">`;
      htmlContent += `<p style="font-weight: bold; color: #333; margin-bottom: 8px;">Sizge usınıs etiletuǵın universitetler:</p><ul style="padding-left: 20px; margin-top: 5px;">`;
      RecommendedUniversities.forEach(function(uni) {
        htmlContent += `<li style="margin-bottom: 6px; color: #28a745; font-weight: bold; list-style-type: none; position: relative; padding-left: 5px;">${uni}</li>`;
      });
      htmlContent += `</ul>`;
      
      // Jasıl fon (Nátiyjeli)
      resultDiv.css({ 'background': '#e8f5e9', 'border': '1px solid #c8e6c9', 'color': '#2e7d32' });
    } else {
      // Sarı fon (Másláhát)
      resultDiv.css({ 'background': '#fff3e0', 'border': '1px solid #ffe0b2', 'color': '#ef6c00' });
    }

    // Bloktı effekt penen kórsetiw
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