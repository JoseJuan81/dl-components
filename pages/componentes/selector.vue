<template>
  <div class="text-textPrim text-sm">
    <section id="section-header">
      <h1 class="text-4xl font-bold">Selector</h1>
      <div class="md:flex">
        <a href="https://www.npmjs.com/package/multiselect-dl" target="_blank">
          <img class="m-1" alt="npm" src="https://img.shields.io/npm/v/multiselect-dl">
        </a>
        <img class="m-1" alt="GitHub" src="https://img.shields.io/github/license/josejuan81/multiselect">
        <img class="m-1" src="https://travis-ci.com/JoseJuan81/multiselect-dl.svg?branch=dev">
        <img class="m-1" alt="npm" src="https://img.shields.io/npm/dm/multiselect-db">
      </div>
    </section>
    <section id="section-introduction" class="my-4 text-textSecon">
      <h2 class="component-variation-title">Introducción</h2>
      <p class="mb-2">El Multiselector es un componente basado en <a href="https://vuejs.org/" target="_blank" class="text-vue font-bold">Vue</a> con estilos básicos de funcionamiento, es decir, no tiene estilos de apariencia.</p>
      <p class="mb-2">Los estilos de apariencia son agregados por el usuario para que los adapte a la UI del proyecto en el que trabaja.
        Ciertamente es tedioso agregar los estilos desde cero para un componente, así que para facilitar
        esto presento un componente con estilos en dos formatos: <pre class="inline">scss</pre>
        y <a href="https://tailwindcss.com" target="_blank" class="text-tailwind font-bold">tailwind</a>.
      </p>
      <p class="mb-2">En la ventana de <b>CODEPEN</b> se puede observar el componente en funcionamiento con ciertos estilos seleccionados al azar.
        Si abres el componente directamente en CODEPEN puedes modificar los estilos de la sección <pre class="inline">scss</pre>
         y observar como cambia el componente o cambiar las etiquetas html para modificar los elementos que forman al componente.
      </p>
      <div class="mb-8">
        <iframe
          height="466"
          style="width: 100%;"
          scrolling="no"
          title="multiselect-dl"
          src="https://codepen.io/JOSEJUAN/embed/BajgWEL?height=265&theme-id=dark&default-tab=html,result"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen <a href='https://codepen.io/JOSEJUAN/pen/BajgWEL'>multiselect-dl</a> by José Juan Domínguez López
          (<a href='https://codepen.io/JOSEJUAN'>@JOSEJUAN</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </div>
    </section>
    <section id="section-component" class="mt-4 mb-8">
      <h2 class="component-variation-title">Tipos de selectores</h2>
      <ul>
        <li class="text-primary my-2">
          <a href="#multiselector-objetos">Multiselector de objetos</a>
        </li>
        <li class="text-primary my-2">
          <a href="#multiselector-string">Multiselector de string</a>
        </li>
        <li class="text-primary my-2">
          <a href="#selector-objetos">Selector simple de Objetos</a>
        </li>
        <li class="text-primary my-2">
          <a href="#selector-string">Selector simple de string</a>
        </li>
      </ul>
      <h3 id="multiselector-objetos" class="component-variation-subtitle">Miltiselector de objetos</h3>
      <label class="label">Seleccionar familiar</label>
      <div class="flex">
        <Multiselector
          clearable
          select-all
          multiselect
          min-height="3rem"
          prop="id"
          class="multi-select-container"
          transition-name="vertical"
          :options="options"
          v-model="optionsSelected"
        >
          <template v-slot:tag="{ tag, removeIt }">
            <div class="tag">
              <div class="selected-item">{{tag.name}}</div>
              <div class="remove-item" @click.stop="removeIt(tag)">&#215;</div>
            </div>
          </template>
          <template v-slot:clear-icon>
            <button type="button" class="icon-clear" v-if="optionsSelected.length > 0">&#215;</button>
          </template>
          <template v-slot:menu-activator>
            <div class="menu-activator"></div>
          </template>
          <template v-slot:select-all-items="{ isSelected, isHovered }">
            <div
              :class="[
                'menu-item',
                { 'menu-item-selected': isSelected },
                { 'menu-item-hover': isHovered },
              ]"
            >
              <div
                v-show="isSelected"
                :class="{ 'selected-icon': isSelected }"
              >&#10003;</div>
              <span class="menu-item-name">Todos</span>
            </div>
          </template>
          <template v-slot:menu="{ menuItem, isHovered }">
            <div
              :class="[
                'menu-item',
                { 'menu-item-hover': isHovered },
                { 'menu-item-selected': menuItem.isSelected },
              ]"
            >
              <div
                v-show="menuItem.isSelected"
                :class="{ 'selected-icon': menuItem.isSelected }"
              >&#10003;</div>
              <span class="menu-item-name">{{menuItem.name}}</span>
            </div>
          </template>
        </Multiselector>
      </div>
      <div>
        mostrar archivos html y scss con tailwind
      </div>
    </section>
    <section id="section-props" class="mt-4 mb-8">
      <h2 class="component-variation-title">Propiedades y slots</h2>
    </section>
    <section id="section-install" class="mt-4 mb-8">
      <h2 class="component-variation-title">Instalación</h2>
      <p>En primer lugar se debe instalar el componente como una dependencia:</p>
      <div>
        <code class="code-wrapper">
          npm i multiselect-dl
        </code>
      </div>
      <p>Para usar el componente de forma globlal en el proyecto:</p>
      <code class="code-wrapper">
        import Vue from 'vue';
        import Selector from 'multiselect-dl';
        Vue.use(Selector);
      </code>
      <p>Cuando se instala de forma global el componente se usa en el <pre class="inline">template</pre>
        de la siguiente manera
      </p>
      <code class="code-wrapper">
        <span>
          <span class="html-tag">template</span><span>></span><br>
        </span>
        <span class="ml-2">
          <span class="html-tag">multiselect-dl</span><span>></span><br>
        </span>
        <span class="ml-4">...</span><br>
        <span class="ml-2">
          <span class="html-tag">/multiselect-dl</span><span>></span><br>
        </span>
        <span>
          <span class="html-tag">/template</span><span>></span><br>
        </span>
      </code>
      <p>Para usar el componente solo en algunos arcrhivos <pre class="inline">.vue</pre>
       se debe instalar de acuerdo a la siguiente sección (Archivos).
      </p>
    </section>
    <section id="section-files" class="section-files mt-4 mb-8">
      <h2 class="component-variation-title">Archivos</h2>
      <p class="mb-2">
        La instalación del componente genera 4 archivos con las siguienes extensiones:
        <pre class="inline">.umd.js</pre>, <pre class="inline">.min.js</pre>,
        <pre class="inline">.esm.js</pre> y <pre class="inline">ssr.js</pre> dentro del
        directorio <b>lib</b>.
      </p>
      <p class="mb-2">
        Segun la documentación de <a class="text-vue font-bold" href="https://es.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#%C2%BFComo-sabe-npm-cual-version-servir-al-navegador-proceso-de-compilacion">Vue</a>
        todos estos archivos están definidos en el <pre class="inline">package.json</pre> del componente
        y cada uno tiene un por qué:
      </p>
      <div class="mb-2 mx-3">
        <p>
          <pre class="inline font-bold">.umd.js</pre>: es el archivo principal y es el usado cuando hacemos <pre class="inline">require</pre>
          o <pre class="inline">import</pre> del componente en nuestro proyecto.
        </p>
        <span>
          <code class="code-wrapper">
              import multiselector from 'multiselect-dl'
          </code>
        </span>
      </div>
      <p class="mb-4 ml-3">
        <pre class="inline font-bold">.esm.js</pre>: es el archivo usado por las herramientas de compilación
        como <a class="text-webpack font-bold" href="https://webpack.js.org/" target="_blank">Webpack</a> y/o
        <a class="text-rollup font-bold" href="https://rollupjs.org/guide/en/" target="_blank">Rollup</a>.
      </p>
      <p class="mb-4 ml-3">
        <pre class="inline font-bold">.min.js</pre>: es el archivo usado para instalar el componente por medio de un
        <pre class="inline">script</pre> en el archivo <pre class="inline">html</pre>.
        Esta es la forma usada para mostrarlo en <pre class="inline">codepen</pre>. De esta manera el componente
        es instalado dentro del objeto <pre class="inline">window</pre> del navegador y no en nuestro proyecto como un dependencia.
        Es importante resaltar que aunque el componente está instalado en el navegador necesita de
        <a class="text-vue font-bold" href="https://vuejs.org/">Vue</a> para funcionar.
        Puedes ver el archivo a través de este <a class="text-primary" href="https://unpkg.com/multiselect-dl@1.1.1/lib/multiselect-dl.min.js" target="_blank">enlace</a>
        (toma en cuenta la versión del componente) o visitar el directorio lib.
        <code class="code-wrapper">
          <span>
            <span class="html-tag">html</span><span>></span><br>
          </span>
          <span class="ml-2">
            <span class="html-tag">head</span><span>></span><br>
          </span>
          <span class="ml-4">...</span><br>
          <span class="ml-4">
            <span class="html-tag">script src="https://unpkg.com/multiselect-dl@1.1.1/lib/multiselect-dl.min.js"</span><span>></span><br>
          </span>
          <span class="ml-4">...</span><br>
          <span class="ml-2">
            <span class="html-tag">/head</span><span>></span><br>
          </span>
          <span>
            <span class="html-tag">/html</span><span>></span>
          </span>
        </code>
      </p>
      <p class="mb-4 ml-3">
        <pre class="inline font-bold">ssr.js</pre>: Si el proyecto en el que se trabaja renderiza los archivos del lado servidor
        entonces puedes usar este archivo. Para ello debes hacer referencia a él al momento de importarlo, es decir:
        <code class="code-wrapper">
          const multiselector = require('multiselect-dl/lib/ssr.js')
        </code>
        <code class="code-wrapper">
          import multiselector from 'multiselect-dl/lib/ssr.js'
        </code>
      </p>
      <p class="mb-4 ml-3">
        <pre class="inline font-bold">.vue</pre>: En caso de usar librerías como <a class="text-nuxt font-bold" href="https://nuxtjs.org/" target="_blank">Nuxt</a>
        recomiendo usar directamente el archivo <pre class="inline">.vue</pre>. Esto porque esta librería realiza 2 procesos
        de preparación o compilación de archivos: uno para la renderización del lado servidor y otro para el cliente o navegador.
        Estos son dos ambientes diferentes con variables globales diferentes y es por ello que el archivo compilado para el navegador
        genera errores del lado servidor y viceversa.
        <code class="code-wrapper">
          import multiselector from 'multiselect-dl/src/components/multiselect-dl'
        </code>
      </p>
      <p class="mb-4 ml-3">
        Otra forma es la de usar la etiqueta <a class="text-nuxt" href="https://nuxtjs.org/api/components-client-only">client-only</a> que ofrece Nuxt y
        permite usar la versión <pre class="inline">.umd.js</pre> sin que hayan errores. Esto porque el componente
        importado, en este caso el selector, iría como un <pre class="inline">slot</pre> y el servidor no lo compila ni usa.
      </p>
    </section>
  </div>
</template>
<script>
import Multiselector from '~/my-components/multiselect-dl/src/components/multiselect-dl'

function data () {
  return {
    options: [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Noah' },
      { id: 3, name: 'Churry' },
      { id: 4, name: 'Kaki' },
      { id: 5, name: 'Pepito' },
      { id: 6, name: 'Maria Auxiliadora de los Ángeles' }
    ],
    optionsSelected: []
  }
}

export default {
  name: 'selector',
  components: {
    Multiselector
  },
  data,
  layout: 'componentes'
}
</script>
