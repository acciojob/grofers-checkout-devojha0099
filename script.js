const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table")

const getSum = () => {
//Add your code here
	const old = document.querySelector(".total-row");
	if(old) old.remove();
	const prices = document.querySelectorAll(".price");
	let sum = 0;
	prices.forEach(ele=>{
		sum = sum + Number(ele.textContent);
	})
	
	const tr = document.createElement("tr");
	tr.classList.add("total-row");
	const td = document.createElement("td");
	td.textContent = `Total Price ${sum}`
	td.colSpan = 2;
	td.id = "ans"
	tr.appendChild(td);
	table.appendChild(tr)

	
  
};

getSumBtn.addEventListener("click", getSum);

