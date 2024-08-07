import {
  updateProfile,
  updatePassword,
  deleteUser as callDeleteUser,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function useUserEdit() {
  const user = auth.currentUser;
  const updateUserName = (name) => {
    updateProfile(user, {
      displayName: name,
    });
  };
  const updateUserProfilePicture = (imageURL) => {
    updateProfile(user, {
      photoURL: imageURL,
    });
  };
  const updateUserPassword = (password) => {
    updatePassword(user, password);
  };

  const deleteUser = () => {
    callDeleteUser(user);
  };
  const passwordReset = (email) => {
    sendPasswordResetEmail(auth, email).then(() => {
      // Password reset email sent!
      // ..
    });
  };
  return {
    updateUserName,
    updateUserProfilePicture,
    updateUserPassword,
    deleteUser,
    passwordReset,
  };
}
