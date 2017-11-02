{% if item.example.length > 0 %}
  <div class="item__example">
    <h3 class="item__sub-heading">Example Usage:</h3>
    {% for example in item.example %}
      <pre class="example__code language-{{ example.type }}"><code>{{ example.code|escape|safe }}</code></pre>
    {% endfor %}
  </div>
{% endif %}
