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
            Montevideo
            <span class="on"></span>
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span>Calzada de Guadalupe CDMX
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
            Aragón
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Indios Verdes
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Vallejo
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Mazatlán
            <span class="on"></span>
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Río Nazas
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Zona Rosa
            <span>Clave: 12408416</span>
          </p>
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

<!-- Almacen CDMX hijo -->
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Almacén de la Ciudad de México y EDOMEX
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <!-- Almacen sonora grill hijo  -->
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span>Almacén Sonora Grill
            <!-- POPOVER -->
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
            <!-- POPOVER -->
            <div class="d-block">Clave: 90078434</div>
          </span>
        </div>
        <a class="fg-question-square"></a>
      </button>
      <!-- REQUEST -->
      <div class="request">
        <a class="fg-question-square"></a>
        <p>¿Solicitar permiso para la Tienda #8009?</p>
        <div>
          <button class="button is-small is-bank">solicitar</button>
        </div>
      </div>
      <!-- REQUEST -->
    </div>
    <!-- END Almacén sonora Grill -->
    <!-- último almacén hijo-->
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
    <!-- END último almacén -->
 <!-- hijo -->
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
    <!-- hijo PUEBLOS SANTA FE -->
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span>Oficinas Pueblos de Santa Fe
            <!-- popover -->
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
            <!-- END popover -->
            <div class="d-block">Clave: 90078434</div>
          </span>
        </div>
        <a class="fg-question-square"></a>
      </button>
      <!-- request -->
      <div class="request">
        <a class="fg-question-square"></a>
        <p>¿Solicitar permiso para la Tienda #8009?</p>
        <div>
          <button class="button is-small is-bank">solicitar</button>
        </div>
      </div>
      <!--END request -->
    </div>
    <!-- END hijo PUEBLOS SANTA FE -->
    <!-- HIJO oficinas puerto madero -->
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
    <!-- END oficinas puerto madero -->
    <!-- HIJO oficinas Rio Amazonas-->
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Oficinas Río Amazonas
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <!-- END oficinas RIO AMAZONAS -->
     <!-- Tienda Mixcoac -->
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Tienda Mixcoac
            <span class="on"></span>
            <span>Clave: 12408416</span>
          </p>
        </div>
      </button>
    </div>
    <!-- END Tienda Mixcoac -->
    <!-- Tienda Centralizada Cancun A -->
    <div class="item">
      <button class="select-item" disabled>
        <div class="info">
          <span>Tienda centralizada Cancún A
            <!-- POPOVER -->
            <div class="popover_wrapper">
              <i class="fas fa-lock-alt"></i>
              <div class="push popover_content up">
                <p class="popover_message">
                  No tienes
                  <strong>permiso</strong> para modificar la
                  información
                </p>
              </div>
            </div>
            <!-- POPOVER -->
            <div class="d-block">Clave: 90078434</div>
          </span>
        </div>
        <a class="fg-question-square"></a>
      </button>
      <!-- REQUEST -->
      <div class="request">
        <a class="fg-question-square"></a>
        <p>¿Solicitar permiso para la Tienda #8009?</p>
        <div>
          <button class="button is-small is-bank">solicitar</button>
        </div>
      </div>
      <!-- Request -->
    </div>
    <!--END Tienda Centralizada Cancun A -->
    <!-- Tienda Condesa -->
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Tienda Condesa
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
    <!--END Tienda Condesa -->
    <!-- Tienda Chilpancingo -->
    <div class="item">
      <button class="select-item">
        <div class="info">
          <p>
            Tienda metro chilpancingo
            <span>Clave: 90078434</span>
          </p>
        </div>
      </button>
    </div>
    <!--END Tienda Chilpancingo -->
