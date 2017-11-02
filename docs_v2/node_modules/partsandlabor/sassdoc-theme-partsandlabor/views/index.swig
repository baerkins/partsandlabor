<!doctype html>

{% set project_title = "Parts and Labor" %}

{% if package.name %}
  {% set project_title = "Parts and Labor" %}
{% endif %}

{% if package.title %}
  {% set project_title = package.title %}
{% endif %}

<html lang="en">
<head>
  {# Include head content #}
  {% include "includes/partials/head.html.swig" with project_title %}
</head>
<body>

  {% include "includes/partials/header.html.swig" with project_title %}

  <div class="container main-container">
    <div class="row">

      {# Sidebar #}
      <aside class="sidebar" role="nav">
        {% include "includes/partials/sidebar.html.swig" %}
      </aside>

      {# Main container #}
      <article class="main" role="main">

        {# Include description #}
        {% include "includes/partials/description.html.swig" %}

        {% for group_name, group in data.byGroupAndType %}
        <section id="{{ groups[group_name] }}" class="item-section__group">
            {# Retrieve group alias if any (else group name) #}
            <h1 class="item-section__group-header">{{ groups[group_name] }}</h1>

            {% for type, items in group %}

            {# If items to be displayed in type #}
            {% if items.length > 0 %}
            <section id="{{ groups[group_name] }}-{{ type }}" class="item-section__type">
              <h2 class="item-section__type-header">{{ type }}s</h2>
              {# 3. Loop over the items in the current type #}
              {% for item in items %}
                {% include "includes/partials/item.html.swig" with item %}
              {% endfor %}
            </section>
            {% endif %}

            {% endfor %}

        </section>
        {% endfor %}
      </article>
    </div>
  </div>

  {# Include footer #}
  {% include "includes/partials/footer.html.swig" with project_title %}

  {# Include scripts #}
  {% include "includes/partials/scripts.html.swig" %}
</body>
</html>