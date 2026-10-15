# ADR 0004: Dedicated Shop Catalog and Interactive Pillow Finder Quiz

- **สถานะ (Status)**: Accepted
- **วันที่ (Date)**: 2026-10-16
- **หัวข้อ**: การสร้างหน้าร้านค้าแยกเฉพาะ (`shop.html`) พร้อมระบบแบบสอบถามแนะนำหมอน (Pillow Finder Quiz)

### 1. บริบท (Context)
ผู้ใช้ต้องการให้มี **หน้ารายการสินค้า (Shop / Catalog)** ที่โชว์สินค้าทั้งหมดของ Unnoise พร้อมสเปกและคุณสมบัติอย่างสั้น และมีระบบ **แบบสอบถามเพื่อแนะนำรุ่นและสเปกหมอนที่เหมาะสมกับสรีระของลูกค้า** เพื่อตอบโจทย์การนำเสนอโมเดลธุรกิจแก่อาจารย์

### 2. การตัดสินใจ (Decision)
1. **Dedicated Page Architecture (`shop.html`)**:
   - สร้างหน้า `shop.html` แยกต่างหาก โดยใช้สไตล์และ Design System เดียวกับ `index.html` (Blue & White Minimalist)
   - เชื่อมโยง Navigation ระหว่าง `index.html` และ `shop.html` อย่างสมบูรณ์แบบ
2. **Product Catalog (4 รายการสินค้า)**:
   - *Unnoise Essential* (฿4,990)
   - *Unnoise Pro Sound & Air* (฿7,990 - Best Value Flagship)
   - *Unnoise Travel Compact* (฿3,490 - Portable Travel Edition)
   - *Unnoise Cooling Silk Pillowcase* (฿1,290 - Accessory)
   - มีปุ่ม Filter กรองหมวดหมู่: ทั้งหมด, หมอนอัจฉริยะ, หมอนพกพา, อุปกรณ์เสริม
3. **Interactive Pillow Finder Quiz Engine**:
   - พัฒนาระบบ Quiz 3 ขั้นตอน:
     - ขั้นที่ 1: ท่านอนประจำตัว
     - ขั้นที่ 2: ปัญหาการนอนที่กังวลที่สุด (กรน / ปวดคอ / เสียงรบกวน)
     - ขั้นที่ 3: ระดับความแน่นของหมอนที่ชื่นชอบ
   - คำนวณผลลัพธ์แบบ Dynamic จับคู่กับสินค้าที่เหมาะสมที่สุด โชว์ Match Percentage (เช่น 98%) พร้อมสเปกความสูงและระดับความแน่นที่แนะนำ และปุ่มกดสั่งจองสินค้าทันที

### 3. ผลลัพธ์ (Consequences)
- เว็บไซต์มีโครงสร้างธุรกิจ E-Commerce ครบวงจร ทั้งการให้ข้อมูล (Landing), คอมมูนิตี้ (Club), และการขายสินค้าพร้อมระบบช่วยตัดสินใจซื้อ (Guided Selling Quiz)
