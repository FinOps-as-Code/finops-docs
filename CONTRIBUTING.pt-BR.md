# Contribuindo com a Automação FinOps

Obrigado pelo seu interesse em contribuir.

Este repositório faz parte do ecossistema da FinOps Foundation e existe para transformar decisões de FinOps em automações práticas e reutilizáveis. Nossa prioridade atual são scripts executáveis e independentes que ajudem equipes a melhorar eficiência de custos, governança e disciplina operacional. Recebemos contribuições que sejam úteis, bem construídas e conectadas a necessidades reais de FinOps.

Queremos que este repositório permaneça prático, acessível e valioso para adoção em diferentes ambientes. Isso significa que as contribuições devem priorizar clareza em vez de complexidade, resolver problemas concretos e ser seguras para avaliação e execução.

## Boas-vindas

FinOps não é apenas visibilidade. Também é execução.

Organizações muitas vezes já sabem onde existe desperdício ou onde uma política precisa ser melhorada, mas ainda precisam de maneiras práticas de agir sobre essas informações. Este repositório foca em automação para ajudar a fechar essa lacuna. O objetivo é oferecer contribuições abertas e compreensíveis que ajudem equipes a agir em oportunidades de otimização de custos, eficiência e governança.

Se você está contribuindo aqui, está ajudando a criar ferramentas que outras pessoas poderão adaptar e usar em ambientes muito diferentes. Escreva sempre com essa responsabilidade em mente.

## Visão do Projeto

Atualmente, este repositório prioriza scripts FinOps simples, executáveis e independentes.

Esse foco é intencional. Scripts costumam ser a forma mais rápida e acessível de resolver problemas reais de FinOps, validar ideias e permitir adoção por equipes com diferentes níveis de maturidade. Eles são fáceis de inspecionar, testar e adaptar.

Ao mesmo tempo, este repositório não pretende limitar artificialmente a evolução futura do projeto. Com o tempo, ele pode expandir para incluir outros ativos de apoio, padrões ou abordagens de implementação quando isso servir claramente à mesma missão prática. Por enquanto, o modelo principal de contribuição está focado em automação standalone, direta, útil e sustentável.

## Princípios de Contribuição

Recebemos contribuições que sigam os princípios abaixo:

- Resolver um problema real de FinOps relacionado a redução de custos, eficiência, governança ou visibilidade operacional.
- Preferir implementações simples e diretas em vez de abstrações desnecessárias.
- Projetar contribuições para que sejam compreensíveis, reutilizáveis e sustentáveis por outras pessoas.
- Manter scripts seguros por padrão sempre que possível.
- Usar parâmetros e configuração em vez de valores hardcoded específicos de ambiente.
- Incluir logs ou saídas claras para que usuários entendam o que o script está fazendo.
- Evitar suposições que tornem a contribuição difícil de executar fora do ambiente original do autor.
- Escrever código e documentação para um público open source, e não apenas para um time interno.

Todo código submetido deve ser testado. As contribuições também devem seguir padrões sólidos de engenharia de software, padrões de código e boas práticas geralmente aceitas de legibilidade, manutenção e segurança.

## Aviso de Suporte e Responsabilidade

Todo o código deste repositório é fornecido na condição de "as is".

Contribuidores e mantenedores não garantem suporte, níveis de serviço, adequação operacional ou manutenção contínua para qualquer contribuição. O uso de qualquer script ou outro artefato deste repositório fica a critério e risco de quem o adota.

Quem optar por usar conteúdo deste repositório é responsável por:

- validar o comportamento em seu próprio ambiente
- revisar segurança, permissões e impacto operacional
- confirmar compatibilidade com sua nuvem, plataforma, ferramentas e requisitos de governança
- aplicar os controles internos, aprovações ou processos de gestão de mudanças exigidos pela sua organização

Este repositório busca fornecer blocos de construção open source úteis, e não serviços gerenciados ou garantias de produção.

## Primeiros Passos

Antes de contribuir, dedique um tempo para entender a forma atual do repositório e qual tipo de contribuição será mais útil.

Um bom ponto de partida é:

1. Revisar a estrutura do repositório e os scripts existentes.
2. Identificar um problema concreto de FinOps que sua contribuição irá resolver.
3. Manter a solução focada e fácil de avaliar.
4. Garantir que o código esteja testado e documentado.
5. Preparar seu pull request com uma explicação clara sobre propósito, comportamento e etapas de validação.

Se você estiver propondo um novo script, pergunte a si mesmo:

- Qual problema específico de FinOps isso resolve?
- O script é seguro e compreensível para alguém fora do meu ambiente?
- Um mantenedor consegue revisar rapidamente o que ele faz e como testá-lo?
- Ele evita dependências ocultas, suposições privadas ou dados sensíveis?

## Tipos de Contribuição

Aceitamos vários tipos de contribuição, com scripts como foco principal neste momento.

### Scripts

Scripts são hoje o principal tipo de contribuição para este repositório.

Uma boa contribuição de script normalmente:

- atende um caso de uso real de otimização de custos, eficiência ou governança
- pode ser executada de forma independente
- é focada em um problema ou fluxo específico
- usa defaults seguros
- suporta parâmetros ou configuração
- inclui logs ou saídas úteis
- pode ser testada e revisada sem setup excessivo

Exemplos incluem automações para identificar desperdício, aplicar guardrails, resumir oportunidades ou apoiar limpezas operacionais com controles de segurança apropriados.

### Documentação

Documentação clara melhora adoção e manutenção.

Contribuições de documentação podem incluir:

- melhorias no README
- exemplos de uso
- notas de arquitetura ou design para scripts específicos
- orientações de contribuição
- esclarecimento de premissas, limitações ou considerações de segurança

A documentação deve ser concisa, correta e escrita para leitores que podem não compartilhar o contexto original do autor.

### Correções de Bugs

Correções de bugs são sempre bem-vindas.

Sempre que possível:

- descreva o problema com clareza
- explique o comportamento esperado e o comportamento observado
- inclua testes quando apropriado
- evite refatorações não relacionadas, a menos que sejam necessárias para a correção

## Processo de Contribuição

O processo de contribuição deve permanecer leve, mas disciplinado.

1. Faça um fork do repositório e crie uma branch para o seu trabalho.
2. Implemente sua mudança com escopo claro e focado.
3. Teste a mudança.
4. Atualize a documentação quando necessário.
5. Envie um pull request com contexto suficiente para que mantenedores revisem com eficiência.

Pull requests pequenos e bem delimitados são mais fáceis de revisar e têm mais chance de avançar rapidamente. Se a mudança for ampla ou introduzir um novo padrão, explique claramente o raciocínio.

## Expectativas de Contexto FinOps

Este repositório existe para apoiar a execução prática de FinOps.

As contribuições devem refletir esse contexto. Uma submissão útil deve conectar o comportamento técnico a um resultado de FinOps. Esse resultado pode estar relacionado a um ou mais dos itens abaixo:

- reduzir custos desnecessários
- melhorar eficiência de recursos
- apoiar accountability e governança
- tornar decisões financeiras mais acionáveis
- permitir uma execução operacional mais segura de oportunidades identificadas

Contribuições não devem ser apenas automação genérica sem um propósito claro de FinOps. A conexão com custo, eficiência, governança ou operações financeiras práticas deve ser explícita.

## Orientação para Pull Requests

Um pull request deve ajudar mantenedores a entender tanto o código quanto o valor FinOps.

Inclua:

- o que a contribuição faz
- qual problema de FinOps ela resolve
- por que a abordagem é útil
- como foi testada
- quaisquer premissas, limitações ou considerações de segurança
- quaisquer atualizações de documentação necessárias

Bons pull requests são concretos e fáceis de revisar. Revisores não devem precisar deduzir o caso de uso, o modelo operacional ou o comportamento esperado.

Se sua contribuição for um script, é especialmente útil incluir:

- o contexto de execução pretendido
- inputs ou parâmetros necessários
- se o script suporta modo dry-run
- exemplo de uso
- saída ou resultado esperado

## Boas Práticas para Scripts

Como scripts são o foco principal neste momento, incentivamos contribuintes a seguir estas práticas sempre que possível:

- Mantenha scripts independentes e fáceis de executar.
- Prefira um script resolvendo um problema claro.
- Use configuração, flags ou parâmetros em vez de valores hardcoded.
- Adote comportamento seguro por padrão.
- Evite ações destrutivas a menos que sejam explicitamente habilitadas.
- Suporte dry-run quando fizer sentido.
- Inclua logs ou saídas claras.
- Faça tratamento de erros compreensível e previsível.
- Mantenha dependências no mínimo necessário.
- Escreva código que seja fácil para outras pessoas lerem e modificarem.
- Inclua testes compatíveis com o comportamento do script.
- Documente pré-requisitos, entradas e resultados esperados.

Quando fizer sentido, os scripts devem ser projetados para rodar em diferentes ambientes com o mínimo de mudanças. Evite embutir qualquer elemento específico de ambiente que reduza portabilidade ou aumente risco.

Não inclua:

- IDs de conta
- segredos
- tokens
- endpoints privados
- configuração interna restrita
- detalhes sensíveis específicos de uma organização
- qualquer outra informação confidencial ou privada específica de ambiente

Se exemplos de configuração forem necessários, use placeholders sanitizados.

## Governança

Este repositório é mantido como um projeto open source dentro do ecossistema da FinOps Foundation.

Mantenedores são responsáveis por orientar a direção do repositório, revisar contribuições e preservar qualidade e consistência. A aceitação de uma contribuição se baseia em aderência ao projeto, clareza, manutenção, segurança e utilidade para o público mais amplo.

Nem toda contribuição será aceita. Mantenedores podem solicitar mudanças, sugerir redução de escopo ou adiar uma proposta se ela não estiver alinhada com a direção atual do projeto.

A direção atual enfatiza automação prática, especialmente scripts standalone, mantendo abertura para evolução cuidadosa ao longo do tempo.

Mantenedores e aprovadores atuais:

- [vesteves33](https://github.com/vesteves33)
- [rendell-arruda](https://github.com/rendell-arruda)
- [elton-peixoto-lu](https://github.com/elton-peixoto-lu)

## Código de Conduta

Espera-se que contribuidores participem de forma respeitosa e construtiva.

Conduza discussões, revisões e colaboração de maneira profissional e amigável ao open source. Presuma boa intenção, acolha feedback e mantenha as conversas focadas em melhorar o trabalho.

Assédio, hostilidade, discriminação e comportamento desrespeitoso não têm espaço neste projeto.

## Perguntas e Discussões

Se você tiver dúvidas, precisar de esclarecimentos ou quiser discutir uma contribuição antes de investir mais em implementação, abra uma issue ou use o canal de discussão apropriado do repositório, se disponível.

Uma conversa antecipada é especialmente útil quando você:

- propõe um novo tipo de script
- introduz um novo padrão ou dependência
- faz uma refatoração ampla
- altera a estrutura do repositório
- contribui com algo que possa influenciar como o trabalho futuro será organizado

Discussões cuidadosas ajudam a manter as contribuições alinhadas e reduzem retrabalho desnecessário.

Para revisão de mantenedores, aprovação de contribuições ou dúvidas de suporte relacionadas a este esforço, os pontos de contato atuais são:

- [vesteves33](https://github.com/vesteves33)
- [rendell-arruda](https://github.com/rendell-arruda)
- [elton-peixoto-lu](https://github.com/elton-peixoto-lu)

## Filosofia Final

Este repositório existe para tornar FinOps mais executável.

As melhores contribuições são aquelas que pegam um problema importante de operações financeiras e o transformam em algo prático, compreensível e reutilizável. Valorizamos contribuições fundamentadas em necessidades reais, construídas com cuidado de engenharia e escritas de forma que outras pessoas possam revisar, adaptar e evoluir com confiança.

Se sua contribuição ajuda equipes a agir de forma mais segura, eficiente e eficaz sobre prioridades de FinOps, provavelmente ela é um ótimo encaixe.
