dmx.config({
  "signup": {
    "signup_step": [
      {
        "name": "value",
        "type": "number"
      }
    ],
    "plano_value": [
      {
        "name": "value",
        "type": "number"
      }
    ],
    "polos_value": [
      {
        "name": "value",
        "type": "number"
      }
    ],
    "show_form": [
      {
        "name": "value",
        "type": "boolean"
      }
    ],
    "data_detail_plano_escolhido": {
      "meta": [
        {
          "type": "text",
          "name": "id_plano"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "number",
          "name": "valor_base"
        },
        {
          "type": "number",
          "name": "valor_polo_extra"
        },
        {
          "type": "number",
          "name": "odem"
        },
        {
          "type": "number",
          "name": "limite_colaboradores_por_polo"
        },
        {
          "type": "number",
          "name": "limite_alunos_por_polo"
        }
      ],
      "outputType": "array"
    }
  },
  "criarconta": {
    "data_detail_plano": {
      "meta": [
        {
          "type": "text",
          "name": "id_plano"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "number",
          "name": "valor_base"
        },
        {
          "type": "number",
          "name": "valor_polo_extra"
        },
        {
          "type": "number",
          "name": "odem"
        },
        {
          "type": "number",
          "name": "limite_colaboradores_por_polo"
        },
        {
          "type": "number",
          "name": "limite_alunos_por_polo"
        }
      ],
      "outputType": "array"
    }
  },
  "selecionarempresa": {
    "repeatempresas": {
      "meta": [
        {
          "type": "text",
          "name": "id_empresa"
        },
        {
          "type": "text",
          "name": "nome_polo"
        },
        {
          "type": "text",
          "name": "status_empresa"
        }
      ],
      "outputType": "array"
    }
  },
  "colaboradores": {
    "data_detail_colaborador": {
      "meta": [
        {
          "type": "text",
          "name": "id_usuario"
        },
        {
          "type": "datetime",
          "name": "created_at_usuario"
        },
        {
          "type": "text",
          "name": "nome_completo"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "token_celular"
        },
        {
          "type": "text",
          "name": "firebase_auth_id"
        },
        {
          "type": "number",
          "name": "ref_id_empresa_ativa"
        },
        {
          "type": "text",
          "name": "senha"
        },
        {
          "type": "text",
          "name": "tipo_usuario"
        },
        {
          "type": "text",
          "name": "nome_tratamento"
        },
        {
          "type": "text",
          "name": "cargo_usuario_empresa"
        },
        {
          "type": "text",
          "name": "status_usuario"
        }
      ],
      "outputType": "array"
    }
  },
  "unidadespolos": {
    "data_detail_polo": {
      "meta": [
        {
          "type": "text",
          "name": "id_empresa"
        },
        {
          "type": "datetime",
          "name": "created_at_empresa"
        },
        {
          "type": "text",
          "name": "razao_social"
        },
        {
          "type": "text",
          "name": "nome_fantasia"
        },
        {
          "type": "text",
          "name": "nome_polo"
        },
        {
          "type": "text",
          "name": "cnpj"
        },
        {
          "type": "text",
          "name": "cep"
        },
        {
          "type": "text",
          "name": "whatsapp"
        },
        {
          "type": "text",
          "name": "status_empresa"
        },
        {
          "type": "text",
          "name": "logradouro"
        },
        {
          "type": "text",
          "name": "numero"
        },
        {
          "type": "text",
          "name": "complemento"
        },
        {
          "type": "text",
          "name": "bairro"
        },
        {
          "type": "text",
          "name": "cidade"
        },
        {
          "type": "text",
          "name": "uf"
        }
      ],
      "outputType": "array"
    }
  }
});
