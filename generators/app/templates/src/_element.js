<% if (type=="lit") { %>
import {html, LitElement, property} from 'lit-element';
<% } else if (type=="polymer") { %>
import {PolymerElement, html} from '@polymer/polymer';
<% } %>

class <%= elementClassName %> extends <%= (type == "lit")? "LitElement":"PolymerElement" %> {
<% if (type=="lit") { %>
  @property({type: String}) myProp = 'stuff';
<% } else if (type=="polymer") { %>
  static get properties() { return { myProp: {type:String, value:'stuff'} }}
<% } %>
  render() {
    return html`
      <p>Hello World</p>
<% if (type=='lit') { %>
      ${this.myProp}
<% } else if (type=='polymer') { %>
      [[myProp]]
<% } %>
    `;
  }
}

customElements.define('<%= name %>', <%= elementClassName %>);
