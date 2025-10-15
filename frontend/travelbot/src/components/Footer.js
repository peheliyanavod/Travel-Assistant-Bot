import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email address"
                      aria-label="Email address"
                    />
                  </p>
                </div>
                <div class="col-auto">
                  <p class="pt-2">
                    <button type="submit" class="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
