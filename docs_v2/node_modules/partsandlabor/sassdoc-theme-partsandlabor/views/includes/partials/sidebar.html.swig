<div id="js-sidebar" class="sidebar__body">
  {# No item documented #}
  {% if data.length == 0 %}
    <p class="sidebar__item  sidebar__item-heading">No documented item.</p>

  {% else %}

    {% for group_name, group in data.byGroupAndType %}
      <a class="sidebar__item  sidebar__item-heading sidebar__item-toggle" data-slug="{{ group_name }}" href="#{{ group_name }}">{{ groups[group_name] }}</a>

      {# Loop over the types #}
      {% for type, items in group %}
        {% if loop.first %}<div class="sidebar__item-submenu">{% endif %}

        {# If items to be displayed in type #}
        {% if items.length > 0 %}
          <a class="sidebar__item sidebar__item-subheading sidebar__item-toggle" data-slug="{{ group_name + '-' + type }}" href="#{{ group_name }}-{{ type }}"><span>{{ (type + 's') }}</span></a>

          {# Loop over the items #}
          {% for item in items %}
            {% if loop.first %}<div class="sidebar__item-submenu">{% endif %}
            <a class="sidebar__item sidebar__item-entry  sassdoc__item" data-group="{{ group_name }}" data-name="{{ item.context.name }}" data-type="{{ item.context.type }}" href="#{{ group_name }}-{{ item.context.type }}-{{ item.context.name }}">{{ item.context.name }}
              {% if item.access[0] == "private" %}<span class="sidebar__annotation  sidebar__annotation--private">private</span>{% endif %}
              {% if item.alias != false %}<span class="sidebar__annotation  sidebar__annotation--alias">alias</span>{% endif %}
            </a>
            {% if loop.last %}</div>{% endif %}
          {% endfor %}
        {% endif %}
        {% if loop.last %}</div>{% endif %}
      {% endfor %}

    {% endfor %}
  {% endif %}
</div>
