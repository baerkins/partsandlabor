<h3 class="item__heading">
  {{ item.context.name }}{% if item.parameter.length > 0 %}(){% endif %}
</h3>


<p class="item__meta">

  {% if item.aliased.length > 0 %}
    <span class="item__aliased">(aliased as
    {% for alias in item.aliased %}
      <a href="#{{ item.context.type }}-{{ alias }}"><code>{{ alias }}</code></a>
    {% endfor %}
    )</span>
  {% endif %}

  {% if item.alias %}
    <span class="item__alias">(alias for <a href="#{{ item.context.type }}-{{ item.alias }}"><code>{{ item.alias }}</code></a>)</span>
  {% endif %}

  {% if item.group.length == 1 %}
      <span class="item__group"><span>Group:</span> {{ item.group[0] }}</span>
  {% endif %}

  {% if item.access %}
    <span class="item__access"><span>Access:</span> {{ item.access }}</span>
  {% endif %}

  {% if item.since.length == 1 %}
    <span class="item__since"><span>Since:</span> {{ item.since[0].version }}{% if item.since[0].description %} &mdash; {{ item.since[0].description }}{% endif %}</p>
  {% endif %}
</p>
