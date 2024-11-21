export const createUser = ({
  displayName,
  photoURL,
  status,
  isDefault,
  userEmail,
  userUID,
  chatUserName,
  chatUserImg,
  chatUserStatus,
  changeReceiverUID,
}) => {
  // user div
  const user = document.createElement('div');
  user.classList.add('user');
  if (isDefault) user.classList.add('active');

  // user image div
  const userImg = document.createElement('div');
  userImg.classList.add('user-img');

  // user display picture
  const imageElement = new Image();
  imageElement.setAttribute(`height`, `50px`);
  imageElement.setAttribute(`width`, `50px`);
  imageElement.src = photoURL ? photoURL : '/no-avatar.svg';
  imageElement.setAttribute(`alt`, ``);

  // user info div
  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');

  // top row div
  const topRow = document.createElement('div');
  topRow.classList.add('top-row');

  // user display name
  const userDisplayName = document.createElement('p');
  userDisplayName.classList.add('user-name');
  userDisplayName.textContent += displayName ? displayName : 'no name';

  // user status span
  const userStatus = document.createElement('span');
  userStatus.classList.add('user-status');
  if (status == 'online') userStatus.classList.add('online');
  userStatus.textContent += status ? status : 'unknown';

  // bottom row div
  const bottomRow = document.createElement('div');
  bottomRow.classList.add('bottom-row');

  // paragraph element
  const pElement = document.createElement('p');
  pElement.classList.add('user-email');
  pElement.textContent += userEmail;

  // appending all element
  user.appendChild(userImg);
  userImg.appendChild(imageElement);
  user.appendChild(userInfo);
  userInfo.appendChild(topRow);
  topRow.appendChild(userDisplayName);
  topRow.appendChild(userStatus);
  userInfo.appendChild(bottomRow);
  bottomRow.appendChild(pElement);

  user.addEventListener('click', (e) => {
    document
      .querySelectorAll('section.chat .chat-app .sidebar .user-chats .user')
      .forEach(
        (user) =>
          user.classList.contains('active') && user.classList.remove('active')
      );
    e.currentTarget.classList.add('active');
    chatUserImg.src = e.currentTarget.querySelector('.user-img img').src;
    chatUserName.textContent =
      e.currentTarget.querySelector('p.user-name').textContent;
    chatUserStatus.classList =
      e.currentTarget.querySelector('span.user-status').classList;
    chatUserStatus.textContent =
      e.currentTarget.querySelector('span.user-status').textContent;
    changeReceiverUID(userUID);

    // always call these function
    document
      .querySelector(
        '#app > section > div > div.chat-window > div.chat-utils > div.chat-utils-b > input'
      )
      .focus();
  });
  return user;
};
