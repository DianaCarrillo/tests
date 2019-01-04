<template>
  <div class="column" style="border: 2px solid yellow;">
    <div class="select-title">
      <div class="icon location"></div>
      <h4>Ubicación</h4>
    </div>
    <div class="item">
      <button class="select-item active">
        <div class="info">
          <p>
            Montevideo <span class="on"></span> <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span
            >Calzada de Guadalupe CDMX
            <div class="popover_wrapper">
              <i class="fg-lock-alt"></i>
              <div class="push popover_content up">
                <p class="popover_message">
                  No tienes <strong>permiso</strong> para modificar la
                  información
                </p>
              </div>
            </div>
            <div class="d-block">Clave: 90078434</div>
          </span>
        </div>
        <a class="fg-question-square"></a>
      </button>
      <div class="request">
        <a class="fg-question-square"></a>
        <p>¿Solicitar permiso para la Tienda #8009?</p>
        <div><button class="button is-small is-bank">solicitar</button></div>
      </div>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Aragón <span>Clave: 90078434</span></p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Indios Verdes <span>Clave: 90078434</span></p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Vallejo <span>Clave: 12408416</span></p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Mazatlán <span class="on"></span> <span>Clave: 90078434</span></p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Río Nazas <span>Clave: 90078434</span></p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Zona Rosa <span>Clave: 12408416</span></p>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "StoreLocation"
};
</script>
