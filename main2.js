const getAttributes = () => {
  const btn = document.querySelector("#wcc");

  const typeBtn = btn.attributes.type;
  const typeBtn1 = btn.attributes.hreflang;
  const typeBtn2 = btn.attributes.rel;
  const typeBtn3 = btn.attributes.target;
  const typeBtn4 = btn.attributes.href;
  console.log(typeBtn);
  console.log(typeBtn1);
  console.log(typeBtn2);
  console.log(typeBtn3);
  console.log(typeBtn4);
};
