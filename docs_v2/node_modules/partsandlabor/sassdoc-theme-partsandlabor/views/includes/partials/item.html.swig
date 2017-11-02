<section class="item" id="{{ group_name }}-{{ item.context.type }}-{{ item.context.name }}">
  {% include '../annotations/name.html.swig' %}
  {% include '../annotations/description.html.swig' %}
  {% include '../annotations/content.html.swig' %}
  {% include '../annotations/parameter.html.swig' %}
  {% include '../annotations/example.html.swig' %}
  {% include '../annotations/output.html.swig' %}
  {# <pre class="language-json">{{ item | json_encode }}</pre> #}
</section>