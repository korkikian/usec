---
layout: default
title: Services
permalink: /services/
order: 2
---
{% include masthead.html 
    title="Our services"
    subtitle="Comprehensive hardware security services for your business"
    image="/assets/img/usec-services-hero.jpeg"
    image_alt="Our services"
    button_text="Contact us"
    button_url="/contact"
    button_text_alt="View our services"
    button_url_alt="/services"
%}


<section class="features-showcase bg-gray-100 py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            uSec services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% if site.services %}
                {% for service in site.services %}
                    {% include features_showcase.html title=service.title description=service.description cta_text=service.cta_text cta_url=service.cta_url %}   
                {% endfor %}
            {% else %}
                <p>No services found. Please check your site configuration.</p>
            {% endif %}
        </div>
    </div>
</section>

{% include col_section_left_text.html
    title="Hardware security services"
    description="We offer a comprehensive hardware security approach to uncover vulnerabilities, remediate them efficiently, and prevent business disruptions."
    image_path="/assets/img/usec-service-highlight.jpeg"
    image_alt="Our services"
    cta_text="Contact us to learn more"
    cta_url="/contact"
%}

{% include cta.html
    title="Ready to secure your devices?"
    subtitle="Contact us today to learn more about our services"
    button_text="Contact us"
    button_url="/contact"
%}