// function deal(advance,royaltyBefore,cap,royaltyAfterCap,distro){
function deal() {
  let advance = Number(
    document.getElementById("pAdvance").value.replace(/\,/g, "")
  );
  let royaltyBefore = Number(
    document.getElementById("royaltyBefore").value / 100
  );
  let cap = Number(document.getElementById("cap").value.replace(/\,/g, ""));
  let royaltyAfterCap = Number(
    document.getElementById("royaltyAfter").value / 100
  );
  let distro = Number(document.getElementById("distro").value / 100);
  let income =
    Number(document.getElementById("streams").value.replace(/\,/g, "")) *
    0.0047;

  // function earnings(income){
  let distroCut = income * distro;
  let client = 0 - advance;
  let producer = advance;
  let remainder = income - distroCut;

  if (remainder * royaltyBefore <= advance) {
    client += remainder;
    producer = advance;
  } else if (remainder * royaltyBefore <= cap) {
    client = remainder * (1 - royaltyBefore);
    producer = remainder * royaltyBefore;
  } else {
    let cappedIncome = cap / royaltyBefore;
    producer = Number(cap);
    client = Number(cappedIncome - cap);
    remainder = Number(remainder - cappedIncome);
    producer += remainder * royaltyAfterCap;
    client += remainder * (1 - royaltyAfterCap);
  }

  document.getElementById("artistDisplay").textContent =
    "Artist Income: $" + client.toLocaleString();
  document.getElementById("producerDisplay").textContent =
    "Producer Income: $" + producer.toLocaleString();
  document.getElementById("distributorDisplay").textContent =
    "Distributor Income: $" + distroCut.toLocaleString();
}
