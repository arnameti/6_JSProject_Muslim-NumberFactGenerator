// http://numbersapi.com/

const factPara = document.querySelector(".fact");
const factInput = document.querySelector("input");
const factButton = document.querySelector("button");

const displayFact = (fact) => {
  factPara.innerHTML = fact;
};

const fetchFact = async (number) => {
  const factUrl = "http://numbersapi.com/";

  const res = await fetch(`${factUrl}${number}`);
  const data = await res.text();

  displayFact(data);
};

factButton.addEventListener("click", () => {
  const number = factInput.value;
  const numberFact = +number;

  fetchFact(numberFact);
});
