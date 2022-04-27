const navBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-5">
    <a className="navbar-brand" href="{% url 'MainSite:index' %}">
        {/* <img src="{% static 'MainSite/images/elite_consortium_services_icon.jpg' %}" width="40" height="40" alt=""
             loading="lazy"> */}
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:index' %}">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:who_needs_a_consortium' %}">Who Needs a Consortium</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:what_can_elite_do_for_you' %}">What can Elite do For You?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:pricing' %}">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:did_you_know_dot_requires' %}">Did you know DOT
                    requires...</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:contact_us' %}">Contact Us</a>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            {/* {% if user.is_authenticated %}
            <li className="nav-item">
                <a className="nav-link" href="{% url 'RandomPuller:index' %}">Pull Randoms</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:logout' %}">Logout</a>
            </li>
            {% else %}
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:login' %}">Login</a>
            </li>
            {% endif %} */}
        </ul>
    </div>
</nav>
<br></br>
    </>
  );
};

export default navBar;
