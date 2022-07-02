function TitleRotator(start_from) {
  let phrases = [
    "“Хотелось бы выразить огромную благодарность сотрудникам MERJEN YOL за продуктивную работу при решении вопроса с экспортными документами, так как грузоотправитель оформил декларации с ошибкой.Логисты MERJEN YOL в сотрудничестве с партнёрами в Европе, смогли решить вопрос на месте и груз благополучно прибыл.”",
    "“Уже более 4 лет пользуемся услугами MERJEN YOL. Мы столкнулись с необходимостью доставить груз в очень сжатые сроки. Сотрудники поставили машину под загрузку вовремя, наняли второго водителя за дополнительную плату вместо одного стандартного. Они с удвоенной скоростью ехали на место назначения, таким образом, ускорив перевозку, наш груз привезли в кратчайшие сроки.”",
    "“Обратились к MERJEN YOL, для перевозки химической продукции, около 2 месяцев он оформлялся, по причине повреждений из-за неправильной упаковки грузоотправителя. Благо сотрудники MERJEN YOL посоветовали перед отгрузкой застраховать, а потом помогли решить проблему со страховой компанией: предоставили фотографии и доводы так что страховщики без лишних вопросов возместили ущерб.”",
  ];
  let total = phrases.length;
  let interval = 10000;
  if (void 0 === start_from) {
    start_from = 0;
  }

  $("#title")
    .text(phrases[start_from])
    .animate({ opacity: "1" }, 1000, function () {
      if (start_from >= total - 1) {
        setTimeout(function () {
          $("#title").animate({ opacity: "0" }, 1000, function () {
            TitleRotator();
          });
        }, interval);
      } else {
        start_from++;
        setTimeout(function () {
          $("#title").animate({ opacity: "0" }, 1000, function () {
            TitleRotator(start_from);
          });
        }, interval);
      }
    });
}
$(document).ready(function () {
  TitleRotator();
});
