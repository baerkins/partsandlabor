{% if item.content %}
  <p>{{ item.content }}</p>
{% endif %}

{% if item.context.type|lower == 'variable' %}
  <h3 class="item__sub-heading">Default Value</h3>
  <div class="item__variable-defaults">
    <pre>{% autoescape true %}<span class="underline">${{ item.context.name }}:</span> {{ item.context.value }}{% endautoescape %};</pre>
  </div>
{% endif %}
