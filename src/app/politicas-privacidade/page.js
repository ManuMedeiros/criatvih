import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { TitlePage } from '@/components/titlePage';

export default function PolicyPrivacy () {
  return (
    <Box minHeight="100vh">
      <TitlePage title="Politicas e Privacidade" />
      <Stack p="50px" gap={5}>
        <Box fontSize={20}>
          <Text as="h2" fontWeight={600} mb={5}>
            Última atualização: 26/10/2023
          </Text>
          <Text>
            Bem-vindo à minha política de privacidade e cookies. Neste
            documento, explico o que são cookies do Criatvih, como utilizo e
            protejo suas informações pessoais durante sua visita ao nosso site.
          </Text>
        </Box>
        <Box fontSize={20}>
          <Text as="h2" fontWeight={600} textDecoration="underline" mb={5}>
            Coleta e Uso de Informações Pessoais
          </Text>
          <Text>
            Solicito informações pessoais apenas quando realmente preciso delas
            para lhe fornecer um serviço. Faço isso por meios justos e legais,
            com o seu conhecimento e consentimento. Também informo por que estou
            coletando e como as informações serão usadas. Apenas retenho as
            informações pelo tempo necessário para fornecer o serviço
            solicitado. Não compartilho informações de identificação pessoal
            publicamente ou com terceiros, exceto quando exigido por lei.
          </Text>
        </Box>
        <Box fontSize={20}>
          <Text as="h2" fontWeight={600} textDecoration="underline" mb={5}>
            O que são cookies?
          </Text>
          <Text>
            Cookies são pequenos arquivos de texto que são armazenados no seu
            dispositivo (computador, smartphone, tablet, etc.) quando você
            visita um site. Esses arquivos contêm informações que são
            transferidas para o seu dispositivo e podem ser lidos posteriormente
            por nossos servidores ou por servidores de terceiros durante suas
            visitas futuras ao meu site.
          </Text>
        </Box>
        <Box fontSize={20}>
          <Text as="h2" fontWeight={600} textDecoration="underline" mb={5}>
            O que são cookies?
          </Text>
          <Text mb={5}>Eu utilizo cookies por diversos motivos, incluindo:</Text>
          <ul>
            <li>
               Melhorar a experiência do usuário: Os cookies me ajudam a
              entender como os visitantes utilizam meu site, me permitindo
              otimizar a navegação e o layout para proporcionar uma experiência
              mais eficiente e agradável.
            </li>
            <li>
               Análise de desempenho: Utilizo cookies para coletar informações
              sobre como os visitantes interagem com meu site, incluindo quais
              páginas são mais populares e quanto tempo os visitantes permanecem
              nelas. Isso nos ajuda a melhorar o desempenho e a funcionalidade
              do meu site.
            </li>
            <li>
               Publicidade personalizada: Os cookies podem ser usados para
              exibir anúncios que sejam relevantes para você com base em suas
              atividades de navegação em nosso site.
            </li>
            <li>
               Funcionalidade do site: Alguns cookies são essenciais para
              garantir que o site funcione corretamente. Isso inclui cookies que
              permitem que você faça login em áreas seguras do site.
            </li>
          </ul>
        </Box>
        <Box fontSize={20}>
          <Text as="h2" fontWeight={600} textDecoration="underline" mb={5}>
            Tipos de cookies que uso:
          </Text>
          <Text mb={5}>Aqui estão os principais tipos de cookies que utilizo:</Text>
          <ul>
            <li>
               Cookies estritamente necessários: Esses cookies são essenciais
              para o funcionamento do site e não podem ser desativados em nossos
              sistemas. Eles geralmente são definidos em resposta a ações feitas
              por você, como solicitação de serviços, como fazer login ou
              preencher formulários.
            </li>
            <li>
               Cookies de Terceiros: Em alguns casos especiais, também uso
              cookies fornecidos por terceiros confiáveis, como o Google
              Analytics, para nos ajudar a entender como você usa o site e como
              posso melhorar sua experiência
            </li>
            <li>
               Cookies de desempenho: Esses cookies me permitem contar visitas
              e fontes de tráfego, para que eu possa medir e melhorar o
              desempenho do meu site. Eles nos ajudam a entender quais páginas
              são mais e menos populares e como os visitantes navegam pelo site.
            </li>
          </ul>
        </Box>
        <Box fontSize={20}>
          <Text as="h2" fontWeight={600} textDecoration="underline" mb={5}>
            Compromisso do Usuário
          </Text>
          <Text>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Criatvih oferece no site, respeitando a legislação
            e evitando atividades ilegais.
            <br />
            Espero que esteja esclarecido e, como mencionado anteriormente, se
            houver algo que você não tem certeza se precisa ou não, geralmente é
            mais seguro deixar os cookies ativados, caso interaja com um dos
            recursos que você usa em nosso site.
          </Text>
        </Box>

        <Box fontSize={20}>
          <Text as="h2" fontWeight={600} textDecoration="underline" mb={5}>
            Alterações nesta política de cookies
          </Text>
          <Text>
            Posso atualizar esta política de cookies de tempos em tempos para
            refletir mudanças em minhas práticas ou por outras razões
            operacionais, legais ou regulatórias. Recomendo que você reveja
            periodicamente esta política para estar informado sobre como estamos
            usando cookies.
          </Text>
        </Box>
        <Box fontSize={20}>
          <Text mb={5}>
            Se tiver alguma dúvida sobre minha política de cookies, entre em
            contato comigo.<br />
            
            Agradeço por escolher visitar meu site e confiar em
            mim para proteger sua privacidade e oferecer uma experiência de
            navegação excepcional.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
