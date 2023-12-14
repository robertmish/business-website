$("#toabout").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".info_section").offset().top,
    },
    "slow"
  );
});

$("#toservices").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".services_section").offset().top,
    },
    "slow"
  );
});

$("#toclients").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".clients_section").offset().top,
    },
    "slow"
  );
});

$("#tocontact").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".contact_section").offset().top,
    },
    "slow"
  );
});
