# Requirements Specification: Unnoise Smart Sleep Pillow & E-Commerce (v3.0)

**โปรเจกต์**: Unnoise Smart Sleep Pillow (UI Model v3.0)  
**วันที่**: 2026-10-16  

---

## 1. ขอบเขตหน้าร้านค้าและรายการสินค้า (`shop.html`)
1. **Product Catalog Grid**:
   - แสดงรายการสินค้าทั้งหมด 4 รายการ (Unnoise Essential, Unnoise Pro, Unnoise Travel, Cooling Silk Pillowcase)
   - ข้อมูลแต่ละชิ้น: รูปภาพสินค้า, ป้ายหมวดหมู่, คุณสมบัติเด่น 3 ข้อ, ราคา, สเปกความแน่น และปุ่มสั่งซื้อ
   - Filter Tabs: สินค้าทั้งหมด, หมอนอัจฉริยะ (Smart Pillows), พกพา (Travel), อุปกรณ์เสริม (Accessories)
2. **Interactive Pillow Finder Quiz (ระบบแนะนำหมอนที่เหมาะกับคุณ)**:
   - ผู้ใช้ตอบคำถาม 3 ข้อสั้นๆ (ท่านอน, ปัญหาการนอน, ความแน่นที่ชอบ)
   - หน้าจอแสดงผลคำนวณ Match Percentage, แนะนำสเปกรุ่นที่ตอบโจทย์ที่สุด และปุ่มกดสั่งจองสินค้าทันที
3. **Cross-Navigation**:
   - Header & Footer มีลิงก์สลับไปมาระหว่างหน้าแรก (`index.html`) และหน้าร้านค้า (`shop.html`)
