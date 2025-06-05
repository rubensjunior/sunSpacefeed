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
  }
});
