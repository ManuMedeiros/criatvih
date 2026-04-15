export const enviarMensagemWhatsApp = () => {
  const mensagemFormatada = `Olá. Vim através da sua página.
Gostaria de entender como funciona seu trabalho com branding, posicionamento e crescimento no digital.

Pode me passar mais informações?
`;

  const url = `whatsapp://send?phone=5511941216687&text=${encodeURIComponent(
    mensagemFormatada,
  )}`;

  window.open(url);
};
