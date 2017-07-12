<section class="item" id="{{ group_name }}-{{ item.context.type }}-{{ item.context.name }}">
  {% include '../annotations/name.html.swig' %}
  {% include '../annotations/description.html.swig' %}
  {% include '../annotations/example.html.swig' %}
  <pre class="language-json">{{ item | json_encode }}</pre>
</section>

{##
# <section class="main__item  container  item{% if item.alias %}  item--alias{% endif %}{% if 'deprecated'|in(item) %}  item--deprecated{% endif %}" id="{{ group_name }}-{{ item.context.type }}-{{ item.context.name }}">

# {% include 'annotations/name.html.swig' %}

# {% include '../annotations/deprecated.html.swig' %}

# {% include '../annotations/preview.html.swig' %}

# {% if not item.alias %}

#  {% for annotation in display.annotations[item.context.type] %}
#    {% set path = '../annotations/' + annotation + '.html.swig' %}
#    {% include path %}
#  {% endfor %}

# {% else %}

#  <p>Refer to <a href="#{{ item.context.type }}-{{ item.alias }}">{{ item.alias }}</a>.</p>

# {% endif %}

# </section>

##}