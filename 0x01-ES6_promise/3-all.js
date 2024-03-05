import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([body, allName]) => console.log(`${body.body} ${allName.firstName} ${allName.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
