export const getFirebaseErrorMessage = (error: any): string => {
  const code = error?.code || '';
  
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'E-mail ou mot de passe incorrect.';
    case 'auth/email-already-in-use':
      return 'Cet e-mail est déjà utilisé par un autre compte.';
    case 'auth/weak-password':
      return 'Le mot de passe est trop faible. Il doit contenir au moins 6 caractères.';
    case 'auth/invalid-email':
      return "L'adresse e-mail n'est pas valide.";
    case 'auth/network-request-failed':
      return 'Erreur de connexion réseau. Veuillez vérifier votre connexion internet.';
    case 'auth/too-many-requests':
      return 'Trop de tentatives échouées. Veuillez réessayer plus tard.';
    case 'auth/popup-closed-by-user':
      return 'La connexion a été annulée.';
    default:
      if (error?.message) {
        // Fallback for non-firebase errors that might be thrown manually
        if (error.message.includes('not a school email') || error.message.includes('e-mail scolaire')) {
          return error.message;
        }
      }
      return 'Une erreur inattendue est survenue. Veuillez réessayer.';
  }
};
