function Submit()
{
    var height  =  document.getElementById('height').value
    var Weight = document.getElementById('weight').value
    document.getElementById('divhid').classList.add('d-none');
    document.getElementById('lableid').classList.remove('d-none');
    var span = document.getElementById('spanid');
    var tometr = (height * height);
    var result1 = (  Weight/tometr)
    result2 = result1.toString().replace(/^0.00+/, '')
    var rssasad = result2.toString().split("",3).map(function(t){return parseInt(t)})
    const singleNumber = Number(rssasad.join(''));
    var aaa = singleNumber.toString()
    var result3 = aaa.substr(0,2)+"." + aaa.substr(2);
     console.log(result3);
    span.innerHTML = result3









}