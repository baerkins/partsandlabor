{% if item.parameter.length > 0 %}
  <h3 class="item__sub-heading">Parameters</h3>
  <div class="item__parameters">
    <table>
      <thead>
        <tr>
          <th class="param-name" scope="col">Name</th>
          <th class="param-desc" scope="col">Description</th>
          <th class="param-type" scope="col">Type</th>
          <th class="param-def" scope="col">Default value</th>
        </tr>
      </thead>
      <tbody>
        {% for parameter in item.parameter %}
          <tr class="item__parameter">
            <td class="param-name" scope="row" data-label="name"><code>${{ parameter.name }}</code></td>
            <td class="param-desc" data-label="desc">{% if parameter.description %}{{ parameter.description|default('&mdash;<span class="visually-hidden"> none</span>')|safe }}{% endif %}</td>
            <td class="param-type" data-label="type">
              {% if parameter.type %}
                <code>{{ parameter.type }}</code>
              {% endif %}
            </td>
            <td class="param-def" data-label="default">
            {% if not parameter.default %}
              &mdash;
            {% else %}
              <code>{{ parameter.default }}</code>
            {% endif %}
            </td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
{% endif %}