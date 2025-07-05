const names = [
  { id: "0", names: "Общее" },
    { id: "1", names: "Оля" },
    { id: "2", names: "Иван и Алина" },
    { id: "3", names: "Евгений и Алина" },
    { id: "4", names: "Артур и Надежда" },
    { id: "5", names: "Алексей и Анна" },
    { id: "6", names: "Иван и Виктория" },
    { id: "7", names: "Наталья" },
    { id: "8", names: "Владислав и Юлия" },
    { id: "9", names: "Александр и Алина" },
    { id: "10", names: "Антон" },
    { id: "11", names: "Матвей и Ангелина" },
    { id: "12", names: "Никита, Анна и Леюшка" },
    { id: "13", names: "Ирина" },
    { id: "14", names: "Александр, Людмила, Антон и Михаил" },
    { id: "15", names: "Эдик и Светлана" },
    { id: "16", names: "Алеся и Александр" },
    { id: "17", names: "Сергей" },
    { id: "18", names: "Владимир, Светлана и Стеша" },
    { id: "19", names: "Михаил и Ольга" },
    { id: "20", names: "Владимир и Тамара" },
    { id: "21", names: "Татьяна" },
    { id: "22", names: "Сергей, Татьяна и Ксения" },
    { id: "23", names: "Дмитрий и Ольга" },
    { id: "24", names: "Алексей" }
  ];
const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
