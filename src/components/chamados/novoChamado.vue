<template>
  <div id="novoChamadoContainer">
    <div class="text-center">
      <b-form-select class="tipoChamado" v-model="selected" :options="options"></b-form-select>
    </div>
    
    <div v-if="selected == 'Alteração/correção de placa'">  
      <b-form>
        <b-form-group id="" label="Informe a placa" label-for="input-placa"> 
            <b-form-input id="input-placa" v-model="form.placa" type="text" description="Caso não tenha placa você também pode informar o chassi">
            </b-form-input>
        </b-form-group>

        <b-form-group id="" label="Informe a nova placa" label-for="input-novaPlaca" > 
          <b-form-input id="input-novaPlaca" v-model="form.novaPlaca" type="text"> </b-form-input>
        </b-form-group>

        <b-form-group id="" label="Informações adicionais" label-for="input-infoAdicional" > 
          <b-form-textarea id="input-infoAdicional" v-model="form.infoAdicional"  placeholder="Coloque informações adicionais" rows="5" max-rows="7"> 
          </b-form-textarea>
        </b-form-group>
      </b-form>
    </div>

    <div v-if="selected == 'Alteração/correção de descricao'">  
      <b-form>
        <b-form-group id="" label="Informe a descricao" label-for="input-descricao"> 
            <b-form-input id="input-descricao" v-model="form.descricao" type="text" description=""></b-form-input>
        </b-form-group>
     
        <b-form-group id="" label="Informe a nova descricao" label-for="input-novaDescricao" > 
          <b-form-input id="input-novaDescricao" v-model="form.novaDescricao" type="text"> </b-form-input>
        </b-form-group>
      
        <b-form-group id="" label="Anexar arquivo" label-for="input-arquivo" > 
          <b-form-file v-model="form.arquivo" class="mt-3" plain></b-form-file>
        </b-form-group>
      </b-form>
    </div>

    <div v-if="selected == 'Alteração de meta de consumo'">
      <b-form>
        <b-form-group id="" label="" label-for="input-placaConsumo"> 
            <b-form-input id="input-consumo" v-model="form.consumo" type="text" description=""></b-form-input>
        </b-form-group>

        <b-form-group id="" label="Informe nova meta de consumo" label-for="input-consumo" > 
          <b-form-input id="input-consumo" v-model="form.novaDescricao" type="text"> </b-form-input>
        </b-form-group>
      
        <b-form-group id="" label="Caso deseje realizar uma alteração em masssa, você também pode anexar arquivo" label-for="input-arquivo" > 
          <b-form-file v-model="form.arquivo" class="mt-3" plain></b-form-file>
        </b-form-group>
      </b-form>
    </div>

    <div v-if="selected == 'Criação de usuario'">
      <b-form>
        
        <b-form-group label="Nome completo" label-for="input-nomeCompleto">
          <b-form-input id="input-nomeCompleto" type="text" > </b-form-input>
        </b-form-group>
        
        <b-form-group label="E-mail" label-for="input-emailUsuario">
          <b-form-input type="email" id="input-emailUsuario"> </b-form-input>
        </b-form-group>

        <b-form-group label="Plataformas" label-for="checkbox-plataformas"> 
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasCriacao" value="Mix telematics"> Mix telematics </b-form-checkbox>
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasCriacao" value="App Wikidados"> App Wikidados </b-form-checkbox>
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasCriacao" value="Getrak"> Getrak </b-form-checkbox>
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasCriacao" value="Cameras"> Cameras </b-form-checkbox>
        </b-form-group>

        <b-form-group label="Quais garagens este usuario pode visualizar?" label-for="input-visualizacaoUsuario">
          <b-form-input type="text" id="input-visualizacaoUsuario"></b-form-input>
        </b-form-group>

        <b-form-group label="Você deseja copiar a permissão de algum usuario existente?" label-for="select-copiarUsuario">
          <b-form-select id="select-copiarUsuario">
            <b-form-select-options :value="true"> Sim </b-form-select-options>
            <b-form-select-options :value="false"> Não </b-form-select-options>
          </b-form-select>
        </b-form-group>

      </b-form>
    </div>

    <div v-if="selected == 'Bloqueio de usuario'">
      <b-form>

        <b-form-group label="Plataforma">
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasBloqueio" value="Mix telematics"> Mix telematics </b-form-checkbox>
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasBloqueio" value="App Wikidados"> App Wikidados </b-form-checkbox>
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasBloqueio" value="Getrak"> Getrak </b-form-checkbox>
          <b-form-checkbox v-model="plataforma" id="checkbox-plataformasBloqueio" value="Cameras"> Cameras </b-form-checkbox>
        </b-form-group>

        <b-form-group label="Motivo (Opcional)" label-for="input-motivo">
          <b-form-input type="text" id="input-motivo"></b-form-input>
        </b-form-group>

      </b-form>
    </div>

    <div v-if="selected == 'Veiculo sem comunicação'">
      <b-form>

        <b-form-group label="Placa" label-for="input-placaComunicacao">
          <b-form-input id="input-placaComunicacao" type="text"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Este veiculo já foi ligado/utlizado depois de sua ultima data de comunicacao?"> 
          <b-form-radio name="radio-utilizacao" :value="true"> Sim </b-form-radio>
          <b-form-radio name="radio-utilizacao" :value="false"> Não </b-form-radio>
        </b-form-group>

        <b-form-group label="Seu veiculo passou por alguma mecânica, auto-eletrica ou qualquer tipo de manutenção recentemente?">
          <b-form-radio name="radio-mecanica" :value="true"> Sim </b-form-radio>
          <div>lembrar---</div>
          <b-form-radio name="radio-mecanica" :value="false"> Não </b-form-radio>
        </b-form-group>

        <b-form-group label="Informações adicionais">
          <b-form-textarea> </b-form-textarea>
        </b-form-group>

      </b-form>
    </div>

    <div v-if="selected == 'Treinamento'">
      <b-form> 
        
        <b-form-group label="Sugerir data do treinamento (Seijeito a alteração)"> 
          <b-form-datepicker></b-form-datepicker>
        </b-form-group>

        <b-form-group label="Plataformas" > 
          <b-form-radio v-model="plataforma" id="checkbox-plataformasTreinamento" value="Mix telematics"> Mix telematics </b-form-radio>
          <b-form-radio v-model="plataforma" id="checkbox-plataformasTreinamento" value="App Wikidados"> App Wikidados </b-form-radio>
          <b-form-radio v-model="plataforma" id="checkbox-plataformasTreinamento" value="Getrak"> Getrak </b-form-radio>
          <b-form-radio v-model="plataforma" id="checkbox-plataformasTreinamento" value="Cameras" > Cameras </b-form-radio>
        </b-form-group>

        <b-form-group label="Informações adicionais"> 
          <b-form-textarea placeholder="Utilize este campo para informar um pouco mais sobre sua frota para que o treinamento seja mais otimizado e objetivo para você!"></b-form-textarea>
        </b-form-group>

      </b-form>
    </div>

    <div v-if="selected == 'Problemas com relatorio' ">
      <b-form-select>
        <b-form-select-option :value="null">Selecione o relatório que esta gerando</b-form-select-option>
        <b-form-select-option-group label="Relatórios de custo"> 
          <b-form-select-option value="Relatório de custo por distancia">Relatório de custo por distancia </b-form-select-option>
          <b-form-select-option value="Relatório de historico de serviços">Relatório de historico de serviços</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Painéis">
          <b-form-select-option value="Painel de 7 dias">Painel de 7 dias</b-form-select-option>
          <b-form-select-option value="Dashboard de performance de veiculo">Dashboard de performance de veiculo</b-form-select-option>
          <b-form-select-option value="Painel de limite de velocidade na rodovia">Painel de limite de velocidade na rodovia</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Gerencialmento de qualidade de dados">
            <b-form-select-option value="Relatório de exclusão de atividade">Relatório de exclusão de atividade</b-form-select-option>
            <b-form-select-option value="Relatório diario de exclusão de atividade">Relatório diario de exclusão de atividade</b-form-select-option>
            <b-form-select-option value="Relatório de precisão da posição do evento">Relatório de precisão da posição do evento</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Relatório de evento">
          <b-form-select-option value="Relatório detalhado de evento"> Relatório detalhado de evento</b-form-select-option>
          <b-form-select-option value="Relatório sumarizado de eventos de servidor em geocerca"> Relatório sumarizado de eventos de servidor em geocerca</b-form-select-option>
          <b-form-select-option value="Relatório geral de evento"> Relatório geral de evento</b-form-select-option>
          <b-form-select-option value="Relatório resumido de eventos "> Relatório resumido de eventos </b-form-select-option>
          <b-form-select-option value="Relatório de evento de terminal"> Relatório de evento de terminal</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Relatório de combustivel">
          <b-form-select-option value="Relatório comparativo de combustível">Relatório comparativo de combustível</b-form-select-option>
          <b-form-select-option value="Relatório diário de horas de motor e combustível">Relatório diário de horas de motor e combustível</b-form-select-option>
          <b-form-select-option value="Relatório diário de evento de consumo de combustivel">Relatório diário de evento de consumo de combustivel</b-form-select-option>
          <b-form-select-option value="Relatório detalhado de horas do motor/combustível">Relatório detalhado de horas do motor/combustível</b-form-select-option>
          <b-form-select-option value="Relatório detalhado de combustivel medido">Relatório detalhado de combustivel medido</b-form-select-option>
          <b-form-select-option value="Relatório de consumo por horas do motor">Relatório de consumo por horas do motor</b-form-select-option>
          <b-form-select-option value="Relatório de combustivel inserido">Relatório de combustivel inserido</b-form-select-option>
          <b-form-select-option value="Relatório de resumo mensal de combustivel">Relatório de resumo mensal de combustivel</b-form-select-option>
          <b-form-select-option value="Painel operacional de combustivel">Painel operacional de combustivel</b-form-select-option>
          <b-form-select-option value="Relatório de consumo de combustivel">Relatório de consumo de combustivel</b-form-select-option>
          <b-form-select-option value="Relatório mensal de combustivel medido">Relatório mensal de combustivel medido</b-form-select-option>
          <b-form-select-option value="Relatório resumido de combustivel medido">Relatório resumido de combustivel medido</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Relatório de lista">
          <b-form-select-option value="Relatório de Configuração dos Dispositivos do Veículo">Relatório de Configuração dos Dispositivos do Veículo</b-form-select-option>
          <b-form-select-option value="Relatório de Configuração de Eventos do Veículo">Relatório de Configuração de Eventos do Veículo</b-form-select-option>
          <b-form-select-option value="Relatório de veículos por dados baixados">Relatório de veículos por dados baixados</b-form-select-option>
          <b-form-select-option value="Relatório de Veículos por Tipo de Unidade">Relatório de Veículos por Tipo de Unidade</b-form-select-option>
          <b-form-select-option value="Relatório da lista de ativos">Relatório da lista de ativos</b-form-select-option>
          <b-form-select-option value="Relatório de diagnóstico de gestão de ativos">Relatório de diagnóstico de gestão de ativos</b-form-select-option>
          <b-form-select-option value="Relatório de status móvel atual">Relatório de status móvel atual</b-form-select-option>
          <b-form-select-option value="Relatório de validação dos certificados dos motoristas">Relatório de validação dos certificados dos motoristas</b-form-select-option>
          <b-form-select-option value="Relatório de vencimento das licenças de motorista">Relatório de vencimento das licenças de motorista</b-form-select-option>
          <b-form-select-option value="Relatório de lista de motoristas">Relatório de lista de motoristas</b-form-select-option>
          <b-form-select-option value="Relatório de eventos do info hub">Relatório de eventos do info hub</b-form-select-option>
          <b-form-select-option value="Relatório detalhado do trabalho">Relatório detalhado do trabalho</b-form-select-option>
          <b-form-select-option value="Relatório sumarizado e detalhado por modelo e data">Relatório sumarizado e detalhado por modelo e data</b-form-select-option>
          <b-form-select-option value="Relatório de mudanças de fuso horário">Relatório de mudanças de fuso horário</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Relatório de movimento">
          <b-form-select-option value="Relatório de visita diario">Relatório de visita diario</b-form-select-option>
          <b-form-select-option value="Relatório de visão geral de localização">Relatório de visão geral de localização </b-form-select-option>
          <b-form-select-option value="Relatório de localização não visitadas">Relatório de localização não visitadas</b-form-select-option>
          <b-form-select-option value="Relatório geral de visitas">Relatório geral de visitas</b-form-select-option>
          <b-form-select-option value="Relatório resumido de movimentos">Relatório resumido de movimentos</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Relatório de RAG">
          <b-form-select-option value="Relatório RAG (Verde, amarelo, verde) diário detalhado">Relatório RAG (Verde, amarelo, verde) diário detalhado</b-form-select-option>
          <b-form-select-option value="Relatório RAG resumido e detalhado">Relatório RAG resumido e detalhado </b-form-select-option>
          <b-form-select-option value="Relatório de comportamento do motorista">Relatório de comportamento do motorista</b-form-select-option>
          <b-form-select-option value="Relatório RAG Diário">Relatório RAG Diário</b-form-select-option>
          <b-form-select-option value="Rag Plus Daily Report">Rag Plus Daily Report</b-form-select-option>
          <b-form-select-option value="Relatório RAG Resumido">Relatório RAG Resumido</b-form-select-option>
          <b-form-select-option value="Relatório RAG Anual">Relatório RAG Anual</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Relatório de pontuação">
          <b-form-select-option value="Relatório de pontuação avançada">Relatório de pontuação avançada</b-form-select-option>
          <b-form-select-option value="Relatório diário de desempenho de condução">Relatório diário de desempenho de condução</b-form-select-option>
          <b-form-select-option value="Relatório detalhado de desempenho de condução">Relatório detalhado de desempenho de condução</b-form-select-option>
          <b-form-select-option value="Relatório Debrief do motorista">Relatório Debrief do motorista</b-form-select-option>
          <b-form-select-option value="Relatório detalhado de classificação de motorista">Relatório detalhado de classificação de motorista</b-form-select-option>
          <b-form-select-option value="Relatório de classificação de motorista">Relatório de classificação de motorista</b-form-select-option>
          <b-form-select-option value="Relatório Scorecard de motorista">Relatório Scorecard de motorista</b-form-select-option>
          <b-form-select-option value="Relatório de pontuação Flexivel Scorecard">Relatório de pontuação Flexivel Scorecard</b-form-select-option>
          <b-form-select-option value="Relatório diário do RAG flexível">Relatório diário do RAG flexível</b-form-select-option>
          <b-form-select-option value="Relatório resumido do RAG flexível">Relatório resumido do RAG flexível</b-form-select-option>
          <b-form-select-option value="Relatório acumulado do ano do RAG flexível">Relatório acumulado do ano do RAG flexível</b-form-select-option>
          <b-form-select-option value="Relatório mensal de desempenho de condução">Relatório mensal de desempenho de condução</b-form-select-option>
          <b-form-select-option value="Relatório mensal de tendências">Relatório mensal de tendências</b-form-select-option>
          <b-form-select-option value="Relatório de tendência de pontuação padrão e de erros de condução">Relatório de tendência de pontuação padrão e de erros de condução</b-form-select-option>
          <b-form-select-option value="Relatório Padrão de Pontuação">Relatório Padrão de Pontuação</b-form-select-option>
          <b-form-select-option value="Relatório diário de desempenho de condução">Relatório diário de desempenho de condução</b-form-select-option>
        </b-form-select-option-group>
        <b-form-select-option-group label="Relatório de viagem">
          <b-form-select-option value="Relatório resumido de performance do veículo">Relatório resumido de performance do veículo</b-form-select-option>
          <b-form-select-option value="Relatório de utilização do ativo">Relatório de utilização do ativo</b-form-select-option>
          <b-form-select-option value="Relatório diário de viagem">Relatório diário de viagem</b-form-select-option>
          <b-form-select-option value="Relatório diário de utilização">Relatório diário de utilização</b-form-select-option>
          <b-form-select-option value="Relatório detalhado de viagem">Relatório detalhado de viagem</b-form-select-option>
          <b-form-select-option value="Relatório de localização de viagem">Relatório de localização de viagem</b-form-select-option>
          <b-form-select-option value="Relatório Logbook">Relatório Logbook</b-form-select-option>
          <b-form-select-option value="Relatório Mensal de Viagem">Relatório Mensal de Viagem</b-form-select-option>
          <b-form-select-option value="Relatório Resumido de Viagem">Relatório Resumido de Viagem</b-form-select-option>
      </b-form-select-option-group>
      </b-form-select>

      <b-form-group label="Periodo selecionado">

        <b-form-group label="De:">
          <b-form-datepicker></b-form-datepicker>
        </b-form-group>

        <b-form-group label="Até:">
          <b-form-datepicker></b-form-datepicker>
        </b-form-group>
        
      </b-form-group>

      <b-form-group label="Por favor nos informe quais veiculos/garagens foram selecionados:">
          <b-form-textarea></b-form-textarea>
      </b-form-group>

    </div>

    <div v-if="selected == 'Problema de leitura de dados'">

      <b-form-group label="Placa/Chassi">
        <b-form-input type="text"></b-form-input>
      </b-form-group> 

      <b-form-group label="Por favor informe que tipo de leitura NÃO esta sendo realizada">
        <b-form-checkbox id="checkbox-plataformasBloqueio" value="Mix telematics"> Leitura de combustível </b-form-checkbox>
        <b-form-checkbox id="checkbox-plataformasBloqueio" value="Mix telematics"> Leitura de velocidade ou RPM </b-form-checkbox>
        <b-form-checkbox id="checkbox-plataformasBloqueio" value="Mix telematics"> Dados de viagem </b-form-checkbox>
      </b-form-group>

      <b-form-group label="Por favor informe o periodo que apresentou problemas:">
        <b-form-group label="De:">
          <b-form-datepicker></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Até:">
          <b-form-datepicker></b-form-datepicker>
        </b-form-group>
      </b-form-group>

    </div>
    <div v-if="selected == 'Problemas de registro de passageiro'">
      <b-form-group label="Informe o nome completo do passageiro">
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Informe a tag do passageiro">
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Informe a matricula do passageiro">
        <b-form-input type="text"></b-form-input>
      </b-form-group>
      
      <b-form-group v-if="transportadoras.includes(profile.accountname)" label="Informe quais empresas de transporte este passageiro pode ter utilizado">
        <b-form-checkbox id="checkbox-passageiroTransportadora" value="Italianinha Tur"> Italianinha Tur </b-form-checkbox>
        <b-form-checkbox id="checkbox-passageiroTransportadora" value="SS Transportes"> SS Transportes </b-form-checkbox>
        <b-form-checkbox id="checkbox-passageiroTransportadora" value="Transgiro"> Transgiro </b-form-checkbox>
        <b-form-checkbox id="checkbox-passageiroTransportadora" value="Expresso são josé"> Expresso são josé </b-form-checkbox>
      </b-form-group>

    </div>

    <div v-if="selected == 'Validacao de eventos'">
      <b-form-group label="Informe o nome do evento"> 
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Informe placa do veiculo"> 
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Informe periodo a ser analisado"> 
        <b-form-group label="De:">
          <b-form-datepicker></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Ate:">
          <b-form-datepicker></b-form-datepicker>
        </b-form-group>
      </b-form-group>

      <b-form-group label="Informações adicionais"> 
        <b-form-input type="text"></b-form-input>
      </b-form-group>

    </div>

    <div v-if="selected == 'Veiculo apitando'">
      <b-form-group label="Informe a placa do veiculo"> 
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Informe DATA e HORA aproximada aonde ocorreu o ultimo apito indevido!"> 
        <b-form-datepicker type="text"></b-form-datepicker>
      </b-form-group>

      <b-form-group label="Informações adicionais"> 
        <b-form-textarea type="text"></b-form-textarea>
        <small> Por favor coloque quais circunstancias este veiculo estava/esta apitando indevidamente. </small>
      </b-form-group>

      
    </div> 
    
    <div v-if="selected == 'Alteracao de evento'">
      
      <b-form-group label="Placa/chassi"> 
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Nome do evento"> 
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Oque você deseja alterar?"> 
        <b-form-checkbox id="checkbox-eventoAlteracao" value="Parametro de evento"> Parametro de evento </b-form-checkbox>
        <b-form-checkbox id="checkbox-eventoAlteracao" value="Atraso de registro"> Atraso de registro </b-form-checkbox>
        <b-form-checkbox id="checkbox-eventoAlteracao" value="Atraso de campainha"> Atraso de campainha </b-form-checkbox>
      </b-form-group>

      <b-form-group label="Favor informar a justificativa par aalteração deste evento"> 
        <b-form-textarea></b-form-textarea>
      </b-form-group>

    </div>

    <div v-if="selected == 'Liberacao de veiculo'">

      <b-form-group label="Informe a placa"> 
        <b-form-input type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Favor informar o ID DA CHAVE de motorista a ser utilizada para liberação"> 
        <b-form-input type="number"></b-form-input>
      </b-form-group>

      <b-form-group label="Favor informar o contato da pessoa mais proxima ao veiculo:">

        <b-form-group label="Nome da pessoa"> 
          <b-form-input type="text"></b-form-input>
        </b-form-group >

        <b-form-group label="Numero de telefone"> 
          <b-form-input type="number"></b-form-input>
        </b-form-group>
        
        
      </b-form-group>
      
      <b-form-group label="Se necessário, você nos autoriza a auxiliar a pessoa informada no contato a realizar um JUMPER no relé?"> 
        <b-form-radio name="radio-jumper" :value="true"> Sim </b-form-radio>
        <b-form-radio name="radio-jumper" :value="false"> Não </b-form-radio>
        <small> Este procedimento requer um eletricista ou deve ser feito em contato com um de nossos técnicos, isso só será feito em ultimos casos! </small>
      </b-form-group>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        transportadoras: ['Italianinha Tur', 'SS Transportes', 'Transgiro', 'Expresso são josé'],
        profile: JSON.parse(localStorage.getItem('profile')),
        plataforma: '',
        selected: null,
        options: [
          {value: null, text: 'Selecione uma opção'},
          {
            label: 'Nivel 1',
            options: [
              { value: 'Alteração/correção de placa', text: 'Alteração/correção de placa' },
              { value: 'Alteração/correção de descricao', text: 'Alteração/correção de descricao' },
              { value: 'Alteração de meta de consumo', text: 'Alteração de meta de consumo' },
              { value: 'Criação de usuario', text: 'Criação de usuario' },
              { value: 'Bloqueio de usuario', text: 'Bloqueio de  usuario' },
              { value: 'Veiculo sem comunicação', text: 'Veiculo sem comunicação' },
            ]
          },
          {
            label: 'Nivel 2',
            options: [
              {value: 'Treinamento', text: 'Treinamento'},
              {value: 'Problemas com relatorio', text: 'Problemas com relatorio'},
              {value: 'Problema de leitura de dados', text: 'Problema de leitura de dados'},
            ]
          },
          {
            label: 'Nivel 3',
            options: [
              {value: 'Problemas de registro de passageiro', text: 'Problemas de registro de passageiro'},
              {value: 'Validacao de eventos', text: 'Validacao de eventos'},
              {value: 'Veiculo apitando', text: 'Veiculo apitando'},
              {value: 'Alteracao de evento', text: 'Alteracao de evento'},
              {value: 'Liberacao de veiculo', text: 'Liberacao de veiculo'},
            ]
          }
        ],
        form: {
          placa: '',
          novaPlaca: '',
          descricao: '',
          novaDescricao: '',
          arquivo: null,

        }
      }
    },

    methods: {

    }

  }
</script>

<style scoped>


.tipoChamado {
  display: inline-block;
  text-align: center;
  width: min-content;
  border: solid 1px;
  border-radius: 5px;
  font-weight: 500;
  background-color: rgb(var(--fundo), 10%);
  color: black;
  box-shadow: 0px 0px 5px 0.5px var(--fundo);
}

.tipoChamado option {
  font-weight: bolder;
}

</style>