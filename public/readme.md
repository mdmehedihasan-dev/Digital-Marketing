  {/* Email Service */}
          <motion.div
            className="flex border-t-2 border-b-2 py-5 border-black justify-between items-center relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredService("email")}
            onMouseLeave={() => setHoveredService(null)}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-x-40">
              <p className="font-bold text-3xl w-[250px]">EMAIL MARKETING</p>
              <div>
                <p className="font-semibold w-80 mb-3">
                  We help brands stand out through aweful, elegant visual design.
                  Our design mainly philosophy.
                </p>
                <p className="font-semibold">+ Logo Design</p>
                <p className="font-semibold">+ Advertisement</p>
                <p className="font-semibold">+ Promotion</p>
              </div>
            </div>
            <motion.div
              className="w-48 hover:bg-black hover:text-white h-48 border-2 flex items-center justify-center rounded-full border-black"
            >
              <span>Details</span>
              <MdOutlineArrowOutward />
            </motion.div>

            {/* Email Image Reveal */}
            {hoveredService === "email" && (
              <motion.div
                className="absolute bg-cover bg-center opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundImage: `url(${images.email})`,
                  left: mousePos.x - 100, // Align image with the mouse cursor
                  top: mousePos.y - 100, // Align image with the mouse cursor
                  width: "200px", // Set width of the image
                  height: "200px", // Set height of the image
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>

          {/* Content Marketing */}
          <motion.div
            className="flex border-t-2 border-b-2 py-5 border-black justify-between items-center relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredService("content")}
            onMouseLeave={() => setHoveredService(null)}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-x-40">
              <p className="font-bold text-3xl w-[250px]">CONTENT MARKETING</p>
              <div>
                <p className="font-semibold w-80 mb-3">
                  We help brands stand out through aweful, elegant visual design.
                  Our design mainly philosophy.
                </p>
                <p className="font-semibold">+ Logo Design</p>
                <p className="font-semibold">+ Advertisement</p>
                <p className="font-semibold">+ Promotion</p>
              </div>
            </div>
            <motion.div
              className="w-48 hover:bg-black hover:text-white h-48 border-2 flex items-center justify-center rounded-full border-black"
            >
              <span>Details</span>
              <MdOutlineArrowOutward />
            </motion.div>

            {/* Content Image Reveal */}
            {hoveredService === "content" && (
              <motion.div
                className="absolute bg-cover bg-center opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundImage: `url(${images.content})`,
                  left: mousePos.x - 100, // Align image with the mouse cursor
                  top: mousePos.y - 100, // Align image with the mouse cursor
                  width: "200px", // Set width of the image
                  height: "200px", // Set height of the image
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>

          {/* Social Marketing */}
          <motion.div
            className="flex border-t-2 border-b-2 py-5 border-black justify-between items-center relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredService("social")}
            onMouseLeave={() => setHoveredService(null)}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-x-40">
              <p className="font-bold text-3xl w-[250px]">SOCIAL MARKETING</p>
              <div>
                <p className="font-semibold w-80 mb-3">
                  We help brands stand out through aweful, elegant visual design.
                  Our design mainly philosophy.
                </p>
                <p className="font-semibold">+ Logo Design</p>
                <p className="font-semibold">+ Advertisement</p>
                <p className="font-semibold">+ Promotion</p>
              </div>
            </div>
            <motion.div
              className="w-48 hover:bg-black hover:text-white h-48 border-2 flex items-center justify-center rounded-full border-black"
            >
              <span>Details</span>
              <MdOutlineArrowOutward />
            </motion.div>

            {/* Social Image Reveal */}
            {hoveredService === "social" && (
              <motion.div
                className="absolute bg-cover bg-center opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundImage: `url(${images.social})`,
                  left: mousePos.x - 100, // Align image with the mouse cursor
                  top: mousePos.y - 100, // Align image with the mouse cursor
                  width: "200px", // Set width of the image
                  height: "200px", // Set height of the image
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>