<template>
  <div class="column" style="border: 2px solid blue;">
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Almacén de la Ciudad de México y EDOMEX
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span>Almacén Sonora Grill
            <div class="popover_wrapper">
              <i class="fg-lock-alt"></i>
              <div class="push popover_content up">
                <p class="popover_message">
                  No tienes
                  <strong>permiso</strong> para modificar la
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
        <div>
          <button class="button is-small is-bank">solicitar</button>
        </div>
      </div>
    </div>
    <div class="item">
      <button class="select-item active">
        <div class="info">
          <p>
            Almacén ASFSDFAD
            <span class="on"></span>
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <hr>
    <div class="select-title">
      <div class="icon offices"></div>
      <h4>Oficinas</h4>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Oficinas Sureste
            <span class="on"></span>
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span>Oficinas Pueblos de Santa Fe
            <div class="popover_wrapper">
              <i class="fg-lock-alt"></i>
              <div class="push popover_content up">
                <p class="popover_message">
                  No tienes
                  <strong>permiso</strong> para modificar la
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
        <div>
          <button class="button is-small is-bank">solicitar</button>
        </div>
      </div>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Oficinas Puerto Madero
            <span class="on"></span>
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Oficinas Río Amazonas
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <hr>
    <div class="select-title">
      <div class="icon stores"></div>
      <h4>Tiendas</h4>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Tienda Mixcoac
            <span class="on"></span>
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span>Tienda centralizada Cancún A
            <div class="popover_wrapper">
              <i class="fg-lock-alt"></i>
              <div class="push popover_content up">
                <p class="popover_message">
                  No tienes
                  <strong>permiso</strong> para modificar la
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
        <div>
          <button class="button is-small is-bank">solicitar</button>
        </div>
      </div>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Tienda Condesa
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>Tienda metro chilpancingo
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "StorePicker"
};
</script>
