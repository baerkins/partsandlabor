{# {% if item.file.length > 0 %} #}
  <div class="item__path">
    <h3 class="item__sub-heading">File Location</h3>
    <p class="mono"><a href="https://github.com/iamhexcoder/partsandlabor/blob/master/lib/{{ item.file.path }}#L{{ item.context.line.start }}" target="_blank" rel="noopener">./lib/{{ item.file.path }}</a>, starting on line {{ item.context.line.start }}</p>
  </div>
{# {% endif %} #}

{# {% if item.output %}
  <h3 class="item__sub-heading">Output</h3>
  <div class="item__description">{{ item.output|safe }}</div>
{% endif %} #}
