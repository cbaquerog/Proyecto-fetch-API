const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2623998f8bmshd5290fa81940debp1f3d0ejsnaa81f03d6718',
      'X-RapidAPI-Host': 'ip-geolocalization-api.p.rapidapi.com'
    }
  };

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocalization-api.p.rapidapi.com/${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err))
}
  

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');

$form.addEventListener('submit',  async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')

})